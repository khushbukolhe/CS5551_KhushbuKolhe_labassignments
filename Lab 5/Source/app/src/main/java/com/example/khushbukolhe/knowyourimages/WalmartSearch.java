package com.example.khushbukolhe.knowyourimages;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;
import com.squareup.picasso.Picasso;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import java.lang.Object;
import java.io.IOException;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;


public class WalmartSearch extends AppCompatActivity {

    String searchString;
    ListView listView;
    JSONArray itemsArray;
    CustomAdapter customAdapter;
    String url;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_walmart_search);

        listView = (ListView) findViewById(R.id.listView);
        itemsArray = new JSONArray();

       customAdapter = new CustomAdapter(WalmartSearch.this);
        listView.setAdapter(customAdapter);

        Bundle extras = getIntent().getExtras();
        searchString = extras.getString("searchTerms");

        if (savedInstanceState == null) {
            String baseUrl = "http://api.walmartlabs.com/v1/search?apiKey=rtzne37uhb2x6jxfteqr5qb8&format=json&query=" + searchString;
            OkHttpClient client = new OkHttpClient();
            try {
                MediaType JSON = MediaType.parse("application/json; charset=utf-8");

                Request request = new Request.Builder()
                        .url(baseUrl)
                        .get()
                        .build();
                client.newCall(request).enqueue(new Callback() {
                    @Override
                    public void onFailure(Call call, IOException e) {
                        System.out.println(e.getMessage());
                    }
                    @Override
                    public void onResponse(Call call, Response response) throws IOException {
                        final JSONObject jsonResult;
                        final String result = response.body().string();
                        try {
                            jsonResult = new JSONObject(result);
                            runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    processAndDisplaySearchResults(jsonResult);
                                }
                            });
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                });
            } catch (Exception ex) {
            }
        }

    }

    class CustomAdapter extends BaseAdapter {

        Context context;

        public CustomAdapter(Context context) {
            super();
            this.context = context;
        }
        @Override
        public int getCount() {
            return itemsArray.length();
        }

        @Override
        public Object getItem(int i) {
            return null;
        }

        @Override
        public long getItemId(int i) {
            return 0;
        }

        @Override
        public View getView(int i, View view, ViewGroup viewGroup) {
            view = getLayoutInflater().inflate(R.layout.walmart_display_product, null);

            TextView txtMSRP = (TextView) view.findViewById(R.id.txtMSRP);
            TextView txtSalePrice = (TextView) view.findViewById(R.id.txtSalePrice);
            TextView txtID = (TextView) view.findViewById(R.id.txtID);
            TextView txtName = (TextView) view.findViewById(R.id.txtName);
            TextView txtDesc = (TextView) view.findViewById(R.id.txtDesc);
            ImageView imgView = (ImageView) view.findViewById(R.id.imageView_walmart);


            try {
                url = itemsArray.getJSONObject(i).getString("thumbnailImage");
                Picasso.with(this.context)
                        .load(url)
                        .into(imgView);

                if (itemsArray.getJSONObject(i).getString("itemId").length() > 0) {
                    txtID.setText("Product Id: " + itemsArray.getJSONObject(i).getString("itemId"));
                } else {
                    txtID.setText("Value Not Available");
                }
                if(itemsArray.getJSONObject(i).getString("name").length() > 0) {
                    txtName.setText(itemsArray.getJSONObject(i).getString("name"));
               } else {
                    txtName.setText("Value Not Available");
               }
               if(itemsArray.getJSONObject(i).getString("msrp").length() > 0) {
                   txtMSRP.append(itemsArray.getJSONObject(i).getString("msrp"));
               } else {
                   txtMSRP.append("Value Not Available");
               }
               if(itemsArray.getJSONObject(i).getString("salePrice").length() > 0) {
                   txtSalePrice.append(itemsArray.getJSONObject(i).getString("salePrice"));
               } else {
                   txtSalePrice.append("Value Not Available");
               }
               if(itemsArray.getJSONObject(i).getString("shortDescription").length() > 0) {
                   txtDesc.setText(itemsArray.getJSONObject(i).getString("shortDescription"));
               } else {
                   txtDesc.setText("Value Not Available");
               }

            } catch (JSONException ex) {

           }
           return view;
        }
    }

    private void processAndDisplaySearchResults(JSONObject jsonResult) {
        try {
            JSONArray arr = jsonResult.getJSONArray("items");
            itemsArray = arr;
            customAdapter.notifyDataSetChanged();
        } catch (JSONException ex) {
            System.out.println(ex.getMessage());
        }
    }
}
