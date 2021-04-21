import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as Yup from 'yup';

import axios from 'axios';

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import Registration from "../Networking/Api";
import BaseURL from "../Networking/Api";

const validationSchema=Yup.object().shape(
  {username: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
  reEnterPassword: Yup.string().required().min(8).label("Password")})

function SignUp({ navigation }) {

  const registerProcess=(val)=>
  {
    let passsword=val.password
    let username=val.username
    if(val.password==val.reEnterPassword)
    {
      console.log(BaseURL+'user/createUser');
      axios.post(BaseURL+'user/createUser',{
        user_email : username,
        user_password: passsword
      }).then
      (res=>
        {
          console.log(res.data)
        }).catch(function(error)
      {
        alert(JSON.stringify(error.message))
      })
      console.log("Done")
      //Post Using Axios
    }
    else alert("Passwords doesn't Match")
  }
  return (
    <View style={{ backgroundColor: "#FAF9F6", flex: 1 }}>
      <View
        style={{
          //backgroundColor: "violet",
          width: wp("50%"),
          height: hp("15%"),
          marginTop: 110,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
        }}>
        <Image style={{ width: "100%",height: "100%"}}source={require("../assets/logo.png")}></Image>
      </View>
      <View
        style={{
          // backgroundColor: "cyan",
          width: wp("90%"),
          height: hp("10%"),
          marginLeft: 15,
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Text style={{ fontSize: 16 }}>Create your account!</Text>
      </View>

      <Formik
        initialValues={{username:'',password:'',reEnterPassword:''}}
        onSubmit={(val)=>{registerProcess(val)}}
        validationSchema={validationSchema} > 
          {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>
          <>
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 10,
          paddingLeft: 10,
        }}
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
          paddingLeft: 10,
        }}
        autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handleChange("password")}    
          onBlur={()=>setFieldTouched("password")}    
          placeholder="Password"       
      />                  
      {touched.password &&< Text style={styles.text}>{errors.password}</Text>}      
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 15,
          paddingLeft: 10,
        }}
        autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handleChange("reEnterPassword")}    
          onBlur={()=>setFieldTouched("reEnterPassword")}    
          placeholder="Re-Enter Password"
      />      
      <TouchableOpacity onPress={handleSubmit}
        style={{
          backgroundColor: "#FFAA00",
          width: wp("90%"),
          height: hp("13%"),
          alignSelf: "center",
          marginTop: 80,
          borderRadius: 40,
          justifyContent: "center",
          elevation: 3,
        }}
      >
        <Text style={{alignSelf: "center", fontSize: 18, }}>Sign up</Text>
      </TouchableOpacity>
      </>}
      </Formik>
      <TouchableOpacity
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("13%"),
          alignSelf: "center",
          marginTop: 10,
          borderRadius: 40,
          justifyContent: "center",
          elevation: 3,
          borderColor: "black",
          borderWidth: 0.5,
        }}
      >
        <Text style={{ alignSelf: "center",fontSize: 18,}}> Continue with Google</Text>
      </TouchableOpacity>
      <Text style={{alignSelf: "center", marginTop: 80, fontSize: 11, }}> Already have an account? Log in</Text>
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
export default SignUp;
