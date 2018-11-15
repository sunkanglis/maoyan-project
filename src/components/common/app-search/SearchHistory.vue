<template>
        <div class="history-item" data-index="0">
            <span class="history-icon"></span>
            <span class="word one-line">{{item}}</span>
            <div class="del-word" @click="del"></div>
    </div>
</template>

<script>
export default {
    props:['item','i'],
    methods:{
        del(){
            this.$emit('del',this.i);
        }
    }
}
</script>

<style lang="scss">
    .history-item{
        height: 1.2rem;
        margin-left: .4rem;
        border-bottom: 1px solid #e5e5e5;
        line-height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .history-icon{
            width: .4rem;
            height: .4rem;
            margin-right: .266667rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAVFBMVEUAAACrq6u2traqqqqrq6utra2vr6+qqqqqqqqrq6urq6urq6urq6usrKyqqqqrq6urq6urq6urq6urq6uqqqqsrKyrq6uqqqqvr6+qqqqrq6uqqqqL2Pn/AAAAG3RSTlMA7gf3nBcL5NSxqHFJNN/IwoWDeWNQTyQgNumZiWHTAAABnklEQVRIx5SS2xKDIAxEIwJVQGu91vb//7PdyEynigL74DjiSZZNKKjVyq4tyrJoO2kbSpOYTfH+U2FmEccGT+3YIYKOt/eJbuMF5ir/V1lbtygh1OJsXfqPlTvjHt6WnDTRT3qS3v4jiOl6a9brwFm/ta0DZ8/NplQUlJKb3eeBe3ECFzNrOLfXjtTc767oQurOPf/d8v2MiMzY8D0PeRqKyuyydexTxEHBbn/zrJCLogQpJFSR14gyDSWpwb+j748qkhIl4U4QNGBfDkZROWgWOzRwQyxiT6kg9VhntJzxotNBjUazn42kdJCknzkKTDngBItEK6LROaBGPCtZXr8ckBfbsmObB1pOpcPy5YFY7Y7a73PJA5fvUcuhqjxQcayISOSBAoP4dF4GJwDDQAzrAh2g+y/ap0BwGKR/IOR8tnMfFD54X1X4qvfjCD/OPQ7hcSCAgQWA5AaWHCIfSOQvazXQWrHIGy8y1rHBOjCric0Ke9xgj9mQawTU0MkxV4O1RnkuD7mu9ILUK1kvgb129qLbq3Uv8/v78D0AP8WcS0GTLxhaAAAAAElFTkSuQmCC) no-repeat;
            background-size: contain;
        }
        .word{
            flex: 1 1;
            color: #333;
            font-size: .4rem;
        }
        .del-word{
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAASFJREFUKBV9kj2OwjAQhWPTkwppL0ADXZIGutVKHICODglWVLtUXIIOuIBvshfIj4SUKhdAossBEt7LMsFEmJGcmWTeZ09mrOI4PiqlRliLIAiu3huD9hfpNbRzTaiu66+qqv7SNB24uCRJdsgdoB/D+wQXCHKssQsmhM330FbQrcIwTBQCjycRIoyVa60/pewXkIHGa0AGr2CcsuycZKiltSBfbBhlXQB9WOUZasSeQH4kDOB8h+DqbRRFJwHEawnEQ8jyeBIhbrzhZpIX/wTajQC0hcjZ7Ra0IQArlsfuuuDmH7sQ5mQANGY3DB/aUSkkfjBDXjsZrvlHHs8u7Pv+VAP6fgcR52Wwyy7LcuJlWTZEqeFjf3dUFEUfF32GxvVumtjRa2eCUPQAAAAASUVORK5CYII=);
            background-repeat: no-repeat;
            background-position: .4rem;
            background-size: .266667rem;
            align-self: center;
            padding: .453333rem .4rem ;
            width: 1.266667rem;
            height: .266667rem;
        }
    }
</style>


