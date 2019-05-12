export default class BaseQuestion {
    constructor(obj) {
        this.initData(obj);
        if (obj != null)
            this.updateQuestionUniqueId();
        else
            this.uniqueId = 0;
    }
    submitAnswer() {
        if (this.isUserAnswer)
            return { noTotal: this.noTotal, noCorrect: this.noCorrect };
        let { noTotal, noCorrect } = this.checkAnswerScore();
        this.noTotal = noTotal;
        this.isUserAnswer = true;
        this.isUserAnswerCorrect = (noTotal === noCorrect);
        this.noCorrect = noCorrect;
        this.updateQuestionUniqueId();
        return { noTotal: noTotal, noCorrect: noCorrect };
    }
    /**Chỉ submit Question mà user đã có trả lời, nhưng chưa submit*/
    submitAnswerIfUserHasAnswer() {
        if (this.isUserAnswer)
            return { noTotal: this.noTotal, noCorrect: this.noCorrect };
        if (this.checkIsUserAnswer())
            return this.submitAnswer();
        return undefined;
    }
    getNoCorrectAndTotal() {
        if (this.noTotal != undefined && this.noTotal > 0)
            return { noCorrect: this.noCorrect, noTotal: this.noTotal };
        return { noCorrect: 0, noTotal: this.getNoTotal() };
    }
    clearUserAnwer() {
        this.clearAnswer();
        this.noCorrect = 0;
        this.isUserAnswer = false;
        this.isUserAnswerCorrect = false;
    }
    updateQuestionUniqueId() {
        let uniqueId = this.getQuestionUniqueId();
        if (this.isUserAnswer)
            uniqueId += 1;
        if (this.isUserAnswerCorrect)
            uniqueId += 1;
        this.uniqueId = uniqueId;
    }
}
