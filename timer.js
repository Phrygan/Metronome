function Timer(callback, timeInterval, audioID) {
    this.timeInterval = timeInterval;

    this.start = () => {
        this.beat = 1;
        this.expected = Date.now() + this.timeInterval
        this.timeOut = setTimeout(this.interval, this.timeInterval)
        console.log("Started Timer!")
    }

    this.stop = () => {
        clearTimeout(this.timeOut)
        console.log("Stopped Timer!")
    }

    this.interval = () => {
        let drift = Date.now() - this.expected;
        this.expected += this.timeInterval
        this.beat++
        if(this.beat > 4) this.beat = 1
        callback(this.beat, audioID)
        console.log("Click Played! Drift: " + drift + " Time Interval: " + this.timeInterval)
        this.timeOut = setTimeout(this.interval, this.timeInterval - drift)
    }
}

export default Timer;