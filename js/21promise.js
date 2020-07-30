let p = new Promise(() => {
    console.log('promise');
});
console.log('hello world');
let p = new Promise((resolve, reject) => {
    reject("失败的");
    resolve('成功了');
    console.log('help');
});
p.then(() => {
    console.log('成功掉');
}, () => {
    console.log('失败掉');
});

const pending = 'pending';
const resolve = 'resolve';
const reject = 'reject';
class Promise {
    constructor(executor) {
        this.value = undefined;
        this.reason = undefined; //记录失败的原因
        this.status = pending;
        this.resolvecallbacks = ;
        this.rejectcallbacks = rejectcallbacks;
        let resolve = () => {
            if (this.status === pending) {
                this.status = resolve;
                this.value = value;
            }
        };
        let reject = () => {
            if (this.status === pending) {
                this.status = reject;
                this.reason = this.reason;
            }
        };
        try {
            executor(resolve, reject);

        } catch (error) {
            reject(error);
        }
    }
    then(onfulfilled, onrejected) {
        if (this.status === resolve) {
            onfulfilled(this.value);
        }
        if (this.status === reject) {
            onrejected(this.reason);
        }
    }
}
setTimeout(() => {
    console.log('hello');

}, 1000);