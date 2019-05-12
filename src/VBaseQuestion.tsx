import React, {Component, PureComponent} from 'react'
import {BaseQuestion} from "./BaseQuestion";

// Bat buoc co props: question
export abstract class VBaseQuestion<P = {}, S = {}> extends Component<P, S> {
    questionUniqueId: number;

    shouldComponentUpdate(nextProps: any, nextState) {
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
            this.forceUpdate()
    }

    render() {
        this.questionUniqueId = this.getQuesObj().uniqueId;
        return this.onRender();
    }

    abstract onRender(): any

    abstract getQuesObj(): BaseQuestion
}
