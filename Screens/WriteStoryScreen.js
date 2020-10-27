import { Header } from 'react-native-elements';
import {TextInput,View,Text, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
          text: '',
          
        };
    }
render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <Text>Title Of Your Story</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />

<Text>Author of the Story</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />

<Text>Write Story</Text>
        <TextInput
          multiline = {true}
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />

        <TouchableOpacity>
            <Text>Submit</Text>
        </TouchableOpacity>
        </View>
     ) }
    }