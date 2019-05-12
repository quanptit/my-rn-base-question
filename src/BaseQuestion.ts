export abstract class BaseQuestion {
    noCorrect: number;
    noTotal: number;
    isUserAnswerCorrect: boolean;
    isUserAnswer: boolean;
    uniqueId: number;

    public constructor(obj?) {
        this.initData(obj);
        if (obj != null)
            this.updateQuestionUniqueId();
        else
            this.uniqueId = 0;
    }

    submitAnswer(): { noTotal: number, noCorrect: number } {
        if (this.isUserAnswer) return {noTotal: this.noTotal, noCorrect: this.noCorrect};

        let {noTotal, noCorrect} = this.checkAnswerScore();
        this.noTotal = noTotal;
        this.isUserAnswer = true;
        this.isUserAnswerCorrect = (noTotal === noCorrect);
        this.noCorrect = noCorrect;
        this.updateQuestionUniqueId();
        return {noTotal: noTotal, noCorrect: noCorrect};
    }

    /**Chỉ submit Question mà user đã có trả lời, nhưng chưa submit*/
    submitAnswerIfUserHasAnswer(): { noTotal: number, noCorrect: number } {
        if (this.isUserAnswer) return {noTotal: this.noTotal, noCorrect: this.noCorrect};
        if (this.checkIsUserAnswer())
            return this.submitAnswer();
        return undefined;
    }

    getNoCorrectAndTotal(): { noTotal: number, noCorrect: number } {
        if (this.noTotal != undefined && this.noTotal > 0) return {noCorrect: this.noCorrect, noTotal: this.noTotal};
        return {noCorrect: 0, noTotal: this.getNoTotal()};
    }

    clearUserAnwer() {
        this.clearAnswer();
        this.noCorrect = 0;
        this.isUserAnswer = false;
        this.isUserAnswerCorrect = false;
    }

    protected abstract clearAnswer()

    /**Tự tính toán ra giá trị riêng cho mỗi question.
     * sử dụng trong shoundComponentUpdate xác định có cập nhật hay không.
     * EX: Khi đã question đã trả lời sẽ có UniqueId khác chưa trả lời ...*/
    abstract getQuestionUniqueId(): number;

    protected updateQuestionUniqueId() {
        let uniqueId = this.getQuestionUniqueId();
        if (this.isUserAnswer) uniqueId += 1;
        if (this.isUserAnswerCorrect) uniqueId += 1;
        this.uniqueId = uniqueId;
    }

    abstract initData(obj)

    protected abstract checkIsUserAnswer(): boolean

    abstract getNoTotal(): number

    protected abstract checkAnswerScore(): { noTotal: number, noCorrect: number }
}
