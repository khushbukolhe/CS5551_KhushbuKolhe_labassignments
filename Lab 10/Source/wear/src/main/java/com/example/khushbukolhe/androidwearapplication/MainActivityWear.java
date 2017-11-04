package com.example.khushbukolhe.androidwearapplication;


import android.os.Bundle;
import android.os.StrictMode;
import android.support.wearable.activity.WearableActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivityWear extends WearableActivity {

    private TextView mTextView;
    private EditText key;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_wear);
        mTextView = (TextView) findViewById(R.id.textView_display);
        Button button = (Button) findViewById(R.id.button2);
        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);
    }

    public void getNutrition(View v) {
        key = (EditText) findViewById(R.id.editext_cityname);
        String s = key.getText().toString();
        String z = s.replace(" ", "_");
        String getURL = "https://api.nutritionix.com/v1_1/search/"+ z +"?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=481404ea&appKey=c624ca0b5e85f2f234653dfd8d5fa9c3";
        String response = null;
        BufferedReader bfr = null;
        try {
            URL url = new URL(getURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();

            bfr = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line = null;


            while ((line = bfr.readLine()) != null) {
                sb.append(line + " ");
            }
            response = sb.toString();

        } catch (Exception ex) {
            String Error = ex.getMessage();
        } finally {
            try {
                bfr.close();
            } catch (Exception ex) {

            }
        }

        try {
            JSONObject f = new JSONObject(response);

            JSONArray array = f.getJSONArray("hits");
            JSONObject array1 = array.getJSONObject(0);
            JSONObject fields = array1.getJSONObject("fields");
            String cal = fields.getString("nf_calories");
            String fat = fields.getString("nf_total_fat");
            String serving = fields.getString("nf_serving_size_qty");
            if (cal == null) {
                Toast.makeText(this, "Sorry couldn't get data....!", Toast.LENGTH_SHORT).show();
            }
            mTextView.setText("Servings :" +  serving.toString()+ "\n"+"Calories :" + cal.toString() + "\n" + "Fat :" + fat.toString() );
        } catch (Exception e) {
            String Error = e.getMessage();
        }
    }
}
