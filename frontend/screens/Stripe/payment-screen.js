import React, { useState, useEffect} from 'react'
import { StyleSheet,Button, View, Text, TouchableOpacity, TextInput } from 'react-native'
import  PaymentView  from './payment-view'


const PaymentScreen = () => {

    const [response, setResponse ] = useState()
    const [amount, onChangeAmount] = useState('$ ');
    const [username, onChangeName] = useState('name')
    const [ makePayment, setMakePayment ] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState('')

    

    const onCheckStatus = async (paymentResponse) => {
        setPaymentStatus('Thank you for supporting, Please wait while confirming your donation!')
        setResponse(paymentResponse)
        var myHeaders = new Headers();
        console.log('*********************** donate & user:' + username + '      ' + amount)
        let jsonResponse = JSON.parse(paymentResponse);
      // perform operation to check payment status

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Basic eG9ybzoxMjM=");
      
      
      var raw = JSON.stringify({
        "authToken": jsonResponse,
        "username":username,
        "amount":parseInt(amount)});
    
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://blackpearl2.ew.r.appspot.com/donations/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
       
      
        try{
           if(stripeResponse){

                const { paid } = stripeResponse.data;
                if(paid === true){
                    setPaymentStatus('Donation Success')
                }else{
                    setPaymentStatus('Donation failed due to some issue')
                }

            }else{
                setPaymentStatus(' Donation failed due to some issue')
            }

        }
        catch (error) {
            
            console.log(error)
            setPaymentStatus(' Donation failed due to some issue')

        }
 
    


    }

    const paymentUI = () => {

        if(!makePayment){

            return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    <Text style={{ fontSize: 25, margin: 10}}> Donate </Text>
                   
                    <Text style={{ fontSize: 16, margin: 10}}> Donator Name:  </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChangeName(text)}
                        value={username} placeholder=' name '
                    /> 

                    <Text style={{ fontSize: 16, margin: 10}}> Donation Amount:  </Text>
                    
                    <TextInput
                        style={{marginBottom:10, height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChangeAmount(text)}
                        value={amount} placeholder=' $ '
                    /> 

                    <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: '#FF5733', borderRadius: 30, justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={() => {
                            setMakePayment(true)
                        }}
                        >
                        <Text style={{ color: '#FFF', fontSize: 20}}>
                            Proceed To Donate
                        </Text>

                    </TouchableOpacity>


                </View>


             
            // show to make payment
        }else{

            if(response !== undefined){
                console.log('Response is not defined')
                return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    <Text>  **************** **************   **********</Text>
                    <Text style={{ fontSize: 25, margin: 10}}> { paymentStatus} </Text>
                    <Text style={{ fontSize: 16, margin: 10}}> { response} </Text>
                </View>

            }else{
                console.log('Response defined')
                return <PaymentView onCheckStatus={onCheckStatus}  amount={amount} username={username}/>

            }
            
        }

    }
return (<View style={styles.container}>
            {paymentUI()}
        </View>)
        
}
const styles = StyleSheet.create({
container: { flex: 1, paddingTop: 100, backgroundColor: 'white', justifyContent: 'center'},
navigation: { flex: 2 },
body: { flex: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' },
footer: { flex: 1, backgroundColor: 'cyan' }
})

 export default PaymentScreen;