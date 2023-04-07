// any component
import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Icon from 'react-native-vector-icons/FontAwesome';
function IconFoot(){
  return(
    <View>
<Icon.Button
  name="facebook"
  backgroundColor="#3b5998"
  onPress={this.loginWithFacebook}>
  Login with Facebook
</Icon.Button>

<Icon name="facebook " color="red" type="regular" onPress={() => alert("do something")} />
  <Icon name="chevron-right" color="blue" type="solid" size={24}/>
  <Icon name="chevron-right" color="green" type="light" size={24} />
    </View>
  )
}

export default IconFoot;