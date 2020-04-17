import { StyleSheet, Dimensions } from "react-native";

/* get a device display width */
var windowSize;
try {
  windowSize=Dimensions.get('window').width;
} catch(e) {
  windowSize=100;
}

const styles = StyleSheet.create({
  container: {
    width: windowSize,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#EBECF4'
  },
  container2: {
    flexDirection: 'row',
    marginBottom: 20
  },
  container3: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 20
  },
  container4: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 20
  },
  container5: {
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 40
  },
  container6: {
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 150
  },
  container7: {
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 20
  },
  scrollView: {
    width: windowSize,
    height:'100%',
    padding: 20
  },
  text: {
    width: 80,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    textAlignVertical:'center',
    textAlign: 'center'
  },
  text2: {
    width: 80,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    textAlignVertical:'center',
    textAlign: 'center',
    marginBottom: 10
  },
  textInput: {
    width: windowSize - 120,
    height: 40,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  textInput2: {
    width: windowSize - 40,
    height: 180,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top'
  },
  buttonText: {
    fontSize: 20,
    width:'100%',
    height:'100%',
    color:'#FFFFFF',
    fontWeight: 'bold',
    textAlignVertical:'center',
    textAlign:'center'
  },
  button: {
    width: windowSize * 0.7,
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: 12
  },
  imageUpload: {
    width: windowSize * 0.7,
    height: 140,
    borderStyle: 'dashed',
    borderColor: '#E9446A',
    borderWidth: 3,
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: 12
  }
});

export default styles;