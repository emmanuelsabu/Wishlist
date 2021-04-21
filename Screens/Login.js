import { Formik } from "formik";
import React, { useState } from "react";
import { View, Text, Image, TextInput,StyleSheet, TouchableOpacity } from "react-native";
import * as Yup from 'yup'

import axios from 'axios';
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import BaseURL from "../Networking/Api";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";

const validationSchema=Yup.object().shape(
  {username: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password")})


function Login({ navigation }) {
  // const dispatch = useDispatch()

  const loginProcess=(val)=>
  {
    let username=val.username;
    let password=val.password;
    axios.post(BaseURL+"auth/signIn",
    {
      username:username,
      password:password
    }).then(res=>
      {
        console.log(res.data);

        const user=jwtDecode(res.data.accessToken);
        console.log("hello",user);

        navigation.navigate("Home")
        // dispatch(saveAuthToken(res.data))
      }).catch(function(error)
      {
        alert(JSON.stringify(error.message))
      })
  }

  return (
    <View style={{ backgroundColor: "#FAF9F6", flex: 1, marginTop: 40 }}>
      <View
        style={{
          //backgroundColor: "violet",
          width: wp("50%"),
          height: hp("15%"),
          marginTop: 80,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View
        style={{
          // backgroundColor: "cyan",
          width: wp("90%"),
          height: hp("10%"),
          marginLeft: 15,
          justifyContent: "center",
          marginTop: 40,
        }} >
        <Text style={{ fontSize: 16 }}>Log in your account!</Text>
      </View>
      <Formik
        initialValues={{username:'',password:''}}
        onSubmit={(val)=>loginProcess(val)}
        validationSchema={validationSchema} > 
          {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>
          <>
      <TextInput style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 10,
          paddingLeft: 10,}}

            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Email"
          onChangeText={handleChange("username")}
          onBlur={()=>setFieldTouched("username")}
      />
            {touched.username &&< Text style={styles.text}>{errors.username}</Text>}      
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 15,
          paddingLeft: 10, }}

          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handleChange("password")}    
          onBlur={()=>setFieldTouched("password")}    
          placeholder="Password"      />
            {touched.password &&< Text style={styles.text}>{errors.password}</Text>}

      <View
        style={{
          // backgroundColor: "cyan",
          width: wp("23%"),
          height: hp("6%"),
          justifyContent: "center",
          alignSelf: "flex-end",
          marginRight: 15,
          marginTop: 5,
        }}>
        <Text style={{fontSize: 10,}}>Forgot password?</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFAA00",
          width: wp("90%"),
          height: hp("13%"),
          alignSelf: "center",
          marginTop: 150,
          borderRadius: 40,
          justifyContent: "center",
          elevation: 3,
        }}
        onPress={handleSubmit}>
        <Text style={{ alignSelf: "center", fontSize: 18,}}> Login </Text>
      </TouchableOpacity>
      </> }
      </Formik>

      <Text
        style={{
          alignSelf: "center",
          marginTop: 80,
          fontSize: 11,
        }}
        onPress={() => navigation.navigate("SignUp")}
      >
        Don't have an account? Sign up
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text:
  {
      color:"red",
      elevation: 3,
      marginLeft: 15,
      marginTop: 10,
      paddingLeft: 10
  }  
})
export default Login;
