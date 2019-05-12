import { Component } from 'react';
// Bat buoc co props: question
export class VBaseQuestion extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.question)
            return nextProps.question.uniqueId !== this.questionUniqueId;
        return false;
    }
    submitAnswer(updateUI = true) {
        this.getQuesObj().submitAnswer();
        if (updateUI)
            this.forceUpdate();
    }
    submitAnswerIfUserHasAnswer(updateUI = true) {
        this.getQuesObj().submitAnswerIfUserHasAnswer();
        if (updateUI)
            this.forceUpdate();
    }
    render() {
        this.questionUniqueId = this.getQuesObj().uniqueId;
        return this.onRender();
    }
}
