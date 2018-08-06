import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import "./Steps.css";


class Steps extends Component{

    constructor (props) {
        super(props);
        this.state = {
            currStepPos: 0,
            prevDisabled: true,
            nextDisabled: false
        }
    }

    increaseCount = () => {
        console.log("hello");
        const {currStepPos} = this.state;
        console.log(this.props.data.length);
        if  (currStepPos === (this.props.data.length - 1)) {
            this.setState({
                nextDisabled: true,
            })
            return null;
        }
        this.setState({
            currStepPos: currStepPos + 1,
            nextDisabled: false,
            prevDisabled: false
        })
    };

    decreaseCount = () => {
        const {currStepPos} = this.state;
        if (currStepPos === 0) {
            this.setState({
                prevDisabled: true
            })
        }
        else if (currStepPos <= (this.props.data.length - 1)) {
            this.setState({
                nextDisabled: false,
                currStepPos: currStepPos - 1
            })
        }
    };

    getElements = () => {
        let {currStepPos} = this.state;
        let inputs = this.props.data[currStepPos].inputs;
        let resultArr = [];
        for(let i = 0; i < inputs.length; i++) {
            // console.log(inputs);
            let currentElement =  inputs[i];
            // console.log('hello',currentElement);
            let type = currentElement.type;
            // console.log(typeof type);
            switch (type) {
                case "checkbox":
                    resultArr.push((<div><br /><div>{currentElement.label}</div></div>))
                    for(let j = 0; j < (currentElement.values.length); j++) {
                        let thisEle = currentElement.values[j];
                        console.log(thisEle);
                        console.log('hello',thisEle.value);
                        resultArr.push((<label for={thisEle.value}>{thisEle.label}</label>));
                        resultArr.push((
                            <input type="checkbox" id={thisEle.value} name={currentElement.name} value={thisEle.value} />
                                ));
                        resultArr.push((<br />));
                    }
                    break;

                case "radio":
                    resultArr.push((<div><br /><div>{currentElement.label}</div></div>));
                    for(let j = 0; j < (currentElement.values.length); j++) {
                        let thisEle = currentElement.values[j];
                        console.log(thisEle);
                        // console.log('hello',thisEle.value);
                        resultArr.push((<label for={thisEle.value}>{thisEle.label}</label>));
                        resultArr.push((
                            <input type="radio" id={thisEle.value} name={currentElement.label} value={thisEle.value} />
                        ));
                        resultArr.push((<br />));
                    }
                    break;

                case "input":
                    resultArr.push((<div><br/></div>))
                    let inputType = currentElement.characterstics.type;
                    switch (inputType) {
                        case "text":
                            resultArr.push((<label for={currentElement.name}>{currentElement.label}</label>));
                            resultArr.push((<input type={"text"} id={currentElement.name} name={currentElement.name}/>));
                            resultArr.push((<br/>));
                            break;
                        case "number":
                            resultArr.push((<label for={currentElement.name}>{currentElement.label}</label>));
                            resultArr.push((<input type={"number"} id={currentElement.name} name={currentElement.name} min={currentElement.characterstics.min} max={currentElement.characterstics.max}/>));
                            resultArr.push((<br />));
                            break;
                        case "email":
                            resultArr.push((<label for={currentElement.name}>{currentElement.label}</label>));
                            resultArr.push((<input type={"email"} id={currentElement.name} name={currentElement.name} required={currentElement.characterstics.required}/>));
                            resultArr.push((<br/>));
                            break;
                    }
                    break;

                case "textarea":
                    resultArr.push((<div><br/><div><label for={currentElement.name}>{currentElement.label}</label></div></div>));
                    resultArr.push((<textarea id={currentElement.name}>{null}</textarea>));
                    resultArr.push((<br/>));
                    break;

            }
        }
        return resultArr;
    };

    render() {
        // console.log(this.props);
        const {data = {}} = this.props;
        const {prevDisabled} = this.state;
        const {nextDisabled} = this.state;
        const {currStepPos} = this.state;
        const resultArr = this.getElements();

        return(
            <div>
                <Card className={"stepClass"}>
                    <CardContent>{data[currStepPos].title}{resultArr}</CardContent>
                    <CardActions>
                        {!prevDisabled && <Button onClick={this.decreaseCount} className={'prevNext'} color="primary" size={"small"}>
                            PREV
                        </Button>}
                        {prevDisabled && <Button disabled onClick={this.decreaseCount} className={'prevNext'} color="primary" size={"small"}>
                            PREV
                        </Button>}
                        {!nextDisabled && <Button onClick={this.increaseCount} className={'prevNext'} variant={"contained"} color="primary" size={"small"}>
                            NEXT
                        </Button>}
                        {nextDisabled && <Button onClick={this.increaseCount} className={'prevNext'} variant={"contained"} color="primary" size={"small"}>
                            SUBMIT
                        </Button>}
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Steps;