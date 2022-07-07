import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { InvalidTextInputError } from './errors'
import { useMoralis } from "react-moralis";


/**
 * Function for displaying a single text box with no submit function just onChange function
 * 
 * @param {object} props    
 * 
 * @returns {React DOM element}
 */
function SingleTextBox (props) {
   

    return (
        <div className="SingleTextBoxContainer">
            <Form> 
                <Form.Group >
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control onChange={props.onChange} value={props.value || ''}/>
                </Form.Group>
            </Form>
        </div>
    )
}

/** 
 * Function for displaying a text box and two buttons. Stateless
 * 
 * @param {object} props    
 * 
 * @return {React DOM element}
*/
function TwoButtonTextSubmission (props){
    const { authenticate, login, isAuthenticated, authError,user } = useMoralis();

    console.log(user)
    return (
        <Form onSubmit={props.primary.submitFunction}> 
            <Form.Group controlId="formBasicPassword">
                <Form.Label>{props.inputLabel}</Form.Label>
                <Form.Control onChange={props.onChange}/>
            </Form.Group>
            <InvalidTextInputError
                    show={!props.validInput}
                    errorMessage={props.invalidInputMessage}
             ></InvalidTextInputError>
            <div className="TwoButtonTextSubmissionButtonContainer">
            
          {user.get("Roles")==='Rider'?<Button className="PrimaryButton" type="submit" size="lg" block>{props.primary.label}</Button>:''}
           {user.get("Roles")==='Driver'?<Button className="SecondaryButton" size="lg" onClick={props.secondary.submitFunction} block>{props.secondary.label}</Button>:''}
            </div>
        </Form>
    );
}

/**
 * Function for displaying two text boxes with two buttons. Stateless
 * 
 * @param {object} props    The properties from a higher power.
 *                          Should be of the form
 *                          {
 *                              inputFieldOne:      {label: string, name: string, value: any}
 *                              inputFieldTwo:      {label: string, name:string, value: any}
 *                              primaryButton:      {submitFunction: callable, label: string}
 *                              secondaryButton:    {submitFunction: callable, label: string}
 *                              onChange:           callable
 *                          }
 *                          
 *@returns {React DOM element}
 */
function TwoButtonTwoTextSubmission (props){
    return (
        <div className="TwoButtonTwoTextSubmissionContainer">
            <Form onSubmit={props.primaryButton.submitFunction}> 
                <Form.Group>
                    <Form.Label>{props.inputFieldOne.label}</Form.Label>
                    <Form.Control name={props.inputFieldOne.name} onChange={props.onChange} value={props.inputFieldOne.value}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>{props.inputFieldTwo.label}</Form.Label>
                    <Form.Control name={props.inputFieldTwo.name} onChange={props.onChange} value={props.inputFieldTwo.value}/>
                </Form.Group>
                <div className="TwoButtonTwoTextSubmissionButtonContainer">
                <Button className="PrimaryButton" type="submit" size="lg">{props.primaryButton.label}</Button>
                    <Button className="SecondaryButton" size="lg" onClick={props.secondaryButton.submitFunction} >{props.secondaryButton.label}</Button>
                </div>
            </Form>
        </div>
    );
}

export  {
    TwoButtonTextSubmission,
    TwoButtonTwoTextSubmission,
    SingleTextBox
}