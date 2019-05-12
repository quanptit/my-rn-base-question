export default abstract class BaseQuestion {
    noCorrect: number;
    noTotal: number;
    isUserAnswerCorrect: boolean;
    isUserAnswer: boolean;
    uniqueId: number;
    constructor(obj?: any);
    submitAnswer(): {
        noTotal: number;
        noCorrect: number;
    };
    /**Chỉ submit Question mà user đã có trả lời, nhưng chưa submit*/
    submitAnswerIfUserHasAnswer(): {
        noTotal: number;
        noCorrect: number;
    };
    getNoCorrectAndTotal(): {
        noTotal: number;
        noCorrect: number;
    };
    clearUserAnwer(): void;
    protected abstract clearAnswer(): any;
    /**Tự tính toán ra giá trị riêng cho mỗi question.
     * sử dụng trong shoundComponentUpdate xác định có cập nhật hay không.
     * EX: Khi đã question đã trả lời sẽ có UniqueId khác chưa trả lời ...*/
    abstract getQuestionUniqueId(): number;
    protected updateQuestionUniqueId(): void;
    abstract initData(obj: any): any;
    protected abstract checkIsUserAnswer(): boolean;
    abstract getNoTotal(): number;
    protected abstract checkAnswerScore(): {
        noTotal: number;
        noCorrect: number;
    };
}
