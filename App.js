import React, {useState} from 'react';

import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import Modal from "react-native-modal";

const App= () => {

  const [answerSelected, SetAnswerSelected] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const InputSolution = () =>{
    if(answerSelected==true){
      return(
        <View style={styles.inputSolution}>
          <Text style={styles.soultionText}>
            Hause
          </Text>
        </View>
      )
    }else{
      return null
    }
  }

  const SolutionItem = () =>{
    if(answerSelected==true){
      return(
        <Pressable style={styles.selectedSolutionItem} onPress={()=>SetAnswerSelected(!answerSelected)}>
          <Text style={styles.selectedSoultionText}>Hause</Text>
        </Pressable>
      )
    }else if(answerSelected==false){
      return(
        <Pressable style={styles.solutionItem} onPress={()=>SetAnswerSelected(!answerSelected)}>
          <Text style={styles.soultionText}>Hause</Text>
        </Pressable>
      )
    }
  }


  const CheckButton = () =>{
    if(answerSelected==false){
      return(
        <View style={styles.bottomButtonContainer}>
          <Pressable style={styles.checkButton}>
            <Text style={styles.checkText}>CHECK ANSWER</Text>
          </Pressable>
        </View>
      )
    }else if(answerSelected==true){
      return(
        <View style={styles.bottomButtonContainer}>
          <Pressable style={styles.checkButtonActive} onPress={()=>setIsModalVisible(true)}>
            <Text style={styles.checkText}>CHECK ANSWER</Text>
          </Pressable>
        </View>
      )
    }
  }

  return(
    <>
    <View style={styles.screenContainer}>
      <View style={styles.taskContainer}>
        <View style={styles.assignmentGuideContainer}> 
          <Text style={styles.assignmentGuidText}>
            Fill in the missing word
          </Text>
          <Text style={styles.assignmentText}>
            The <Text style={{fontWeight: '500',textDecorationLine: 'underline'}}>House</Text> is small.
          </Text>
        </View>
        <View style={styles.assignmentContainer}>
          <Text style={styles.mainAssignmentText}>Das</Text>
          <View style={styles.inputContainer}>
            <InputSolution></InputSolution>
          </View>
          <Text style={styles.mainAssignmentText}>
            ist klein.
          </Text>
        </View>
        <View style={styles.answersContainer}>
          <View style={styles.solutionContainer}>
            <Pressable style={styles.solutionItem} onPress={()=>console.log('test')}>
              <Text style={styles.soultionText}>folgen</Text>
            </Pressable>
          </View>
          <View style={styles.solutionContainer}>
            <Pressable style={styles.solutionItem} onPress={()=>console.log('test')}>
              <Text style={styles.soultionText}>Schaf</Text>
            </Pressable>
          </View>
          <View style={styles.solutionContainer}>
            <Pressable style={styles.solutionItem} onPress={()=>console.log('test')}>
              <Text style={styles.soultionText}>Bereiden</Text>
            </Pressable>
          </View>
          <View style={styles.solutionContainer}>
            <SolutionItem></SolutionItem>
          </View>
        </View>
        <CheckButton></CheckButton>
      </View>
      <Modal  isVisible={isModalVisible}
              backdropOpacity={0.1}
        >
        <View style={styles.correctModal}>
          <Text style={styles.modalTxt}>Great Job!</Text>
          <Pressable style={styles.modalCheckButton}>
            <Text style={styles.modalCheckButtonText}>CONTINUE</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
    </>
  )
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#75D9FE'
  },
  taskContainer:{
    width: '100%',
    height: '80%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#3B6D82',
    borderRadius: 35,
  },
  assignmentGuideContainer:{
    width: '80%',
    height: '20%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  assignmentGuidText:{
    fontSize: 16,
    fontWeight: '100',
    color: '#fff'
  },
  assignmentText:{
    marginTop: '10%',
    fontSize: 28,
    fontWeight: '300',
    color: '#fff'
  },
  assignmentContainer:{
    width: '80%',
    height: '20%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainAssignmentText:{
    color: '#fff',
    fontSize: 24,
  },
  inputContainer:{
    width: '50%',
    height: '50%',
    justifyContent: 'center',
  },
  inputSolution:{
    alignSelf: 'center',
    padding: '15%',
    paddingHorizontal: '25%',
    backgroundColor: '#FEFFFD',
    borderRadius: 20,
  },
  answersContainer:{
    width: '80%',
    height: '40%',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  solutionContainer:{
    width: '50%',
    height: '40%',
    justifyContent: 'center',
  },
  solutionItem:{
    alignSelf: 'center',
    padding: '15%',
    paddingHorizontal: '25%',
    backgroundColor: '#FEFFFD',
    borderRadius: 20,
  },
  selectedSolutionItem:{
    alignSelf: 'center',
    padding: '15%',
    paddingHorizontal: '25%',
    backgroundColor: '#6391A6',
    borderRadius: 20,
  },
  soultionText:{
    fontSize: 18,
    fontWeight: '600',
    color: '#2C485B'
  },
  selectedSoultionText:{
    fontSize: 18,
    fontWeight: '600',
    color: '#6391A6'
  },
  bottomButtonContainer:{
    width: '80%',
    height: '20%',
    alignSelf: 'center',
  },
  checkButton:{
    width: '100%',
    height: '50%',
    backgroundColor: '#6490A5',
    borderRadius: 40,
    justifyContent: 'center',
  },
  checkButtonActive:{
    width: '100%',
    height: '50%',
    backgroundColor: '#1FE4E7',
    borderRadius: 40,
    justifyContent: 'center',
   
  },
  checkText:{
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    alignSelf: 'center'
  },
  correctModal:{
    flex: 1,
    position: 'absolute',
    bottom: 0,
    marginLeft: '-5%',
    marginBottom: '-5%',
    height: '30%',
    width: '110%',
    backgroundColor: '#0FDFE8',
    borderRadius: 20,
  },
  modalTxt:{
    marginLeft: '10%',
    marginTop: '10%',
    fontSize: 24,
    fontWeight: '800',
    color: '#fff'
  },
  modalCheckButton:{
    marginTop: '10%',
    backgroundColor: '#fff',
    width: '80%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 40,
    justifyContent: 'center',
  },
  modalCheckButtonText:{
    color: '#0FDFE8',
    fontSize: 22,
    fontWeight: '700',
    alignSelf: 'center'
  }
});

export default App;
