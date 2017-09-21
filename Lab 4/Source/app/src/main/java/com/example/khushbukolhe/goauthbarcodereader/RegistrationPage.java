package com.example.khushbukolhe.goauthbarcodereader;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.content.SharedPreferences;
import android.content.Context;

public class RegistrationPage extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registration_page);
    }

    public void verifyRegistration(View v) {
        EditText usernametxt = (EditText) findViewById(R.id.username);
        EditText passwordtxt = (EditText) findViewById(R.id.password);
        EditText emailTxt = (EditText) findViewById(R.id.email);
        EditText reenteredPasswordtxt = (EditText) findViewById(R.id.reEnterPassword);
        String userName = usernametxt.getText().toString();
        String password = passwordtxt.getText().toString();
        String email = emailTxt.getText().toString();
        String repassword = reenteredPasswordtxt.getText().toString();

        boolean validationFlag = false;
        if (!userName.isEmpty() && !password.isEmpty() && !email.isEmpty() && !repassword.isEmpty()) {
            if (password.equals(repassword)) {
                saveCredentials(userName, password);
                Intent intent = new Intent(this, MainActivity.class);
                startActivity(intent);
            }
            else {
                TextView errView = (TextView) findViewById(R.id.errorMessage);
                errView.setText("Passwords dont Match");
                errView.setVisibility(View.VISIBLE);
            }
        }

        else{
            TextView errView = (TextView) findViewById(R.id.errorMessage);
            errView.setText("All fields are Mandatory");
            errView.setVisibility(View.VISIBLE);
        }

    }

    public void saveCredentials(String key , String value) {
        SharedPreferences prefs = getSharedPreferences("mysettings", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = prefs.edit();
        editor.putString(key,value);
        editor.apply();
    }


    public String getCredentials(String key) {
        SharedPreferences prefs = getSharedPreferences("mysettings", Context.MODE_PRIVATE);
        return prefs.getString(key,"");
    }

}
