package com.example.khushbukolhe.goauthbarcodereader;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import com.facebook.login.widget.LoginButton;
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.login.LoginResult;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;

public class MainActivity extends AppCompatActivity {

    private TextView info;
    private LoginButton loginButton;
    private CallbackManager callbackManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        FacebookSdk.sdkInitialize(getApplicationContext());
        callbackManager = CallbackManager.Factory.create();
        info = (TextView)findViewById(R.id.info);
        loginButton = (LoginButton)findViewById(R.id.login_button);
        loginButton.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
            @Override
            public void onSuccess(LoginResult loginResult) {
//                info.setText(
//                        "User ID: "
//                                + loginResult.getAccessToken().getUserId()
//                                + "\n" +
//                                "Auth Token: "
//                                + loginResult.getAccessToken().getToken()
//                );
                navigateToBarcodeReader();
            }

            @Override
            public void onCancel() {
//                info.setText("Login attempt canceled.");
            }

            @Override
            public void onError(FacebookException e) {
                TextView errView = (TextView) findViewById(R.id.error_view);
                errView.setVisibility(View.VISIBLE);
                errView.setText("FB Login attempt failed.");
//                info.setText("Login attempt failed.");
            }
        });

        TextView _loginLink =(TextView) findViewById(R.id.link_login);
        _loginLink.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                navigateToRegistration();
            }
        });
    }

    @Override
    public void onStart() {
        super.onStart();
    }

    @Override
    protected void onResume() {
        super.onResume();
        TextView txtUserName = (TextView) findViewById(R.id.username);
        TextView txtPassword = (TextView) findViewById(R.id.password);
        txtUserName.setText("");
        txtPassword.setText("");
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        callbackManager.onActivityResult(requestCode, resultCode, data);
    }

    private  void navigateToRegistration() {
        Intent intent = new Intent(this, RegistrationPage.class);
        startActivity(intent);
    }

    private  void navigateToBarcodeReader() {
        Intent intent = new Intent(this, BarcodeReader.class);
        startActivity(intent);
    }

    public void checkCredentials(View v) {
        TextView txtError = (TextView) findViewById(R.id.error_view);
        txtError.setVisibility(View.GONE);
        EditText usernametxt = (EditText) findViewById(R.id.username);
        EditText passwordtxt = (EditText) findViewById(R.id.password);
        String userName = usernametxt.getText().toString();
        String password = passwordtxt.getText().toString();

        boolean validationFlag = false;
        if (!userName.isEmpty() && !password.isEmpty()) {
            if (userName.equals("admin") && password.equals("admin")) {
                validationFlag = true;
                navigateToBarcodeReader();
            } else {
                String pass = getCredentials(userName);
                if (!pass.isEmpty() && pass.equals(password)) {
                    validationFlag = true;
                    navigateToBarcodeReader();
                }
                else {
                    txtError.setVisibility(View.VISIBLE);
                    txtError.setText("Incorrect credentials.");
                }
            }
        } else {
            txtError.setVisibility(View.VISIBLE);
            txtError.setText("Incorrect credentials.");
        }
    }

    public String getCredentials(String key) {
        SharedPreferences prefs = getSharedPreferences("mysettings", Context.MODE_PRIVATE);
        return prefs.getString(key,"");
    }

    }
