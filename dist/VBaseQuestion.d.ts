import { Component } from 'react';
import BaseQuestion from "./BaseQuestion";
export declare abstract class VBaseQuestion<P = {}, S = {}> extends Component<P, S> {
    questionUniqueId: number;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    submitAnswer(updateUI?: boolean): void;
    submitAnswerIfUserHasAnswer(updateUI?: boolean): void;
    render(): any;
    abstract onRender(): any;
    abstract getQuesObj(): BaseQuestion;
}
