<template>
    <section class="app-nav">
        <div class="city">北京
            <i class="fa fa-sort-desc"></i>
        </div>
        <div class="tabs">
            <router-link
                exact-active-class='active' 
                v-for='movienav in movienavs' 
                :key='movienav.id' 
                class="tab-item"
                :to='movienav.path'

            >{{movienav.title}}</router-link>
        </div>
        <a class="search"></a>
    </section>
</template>
<script>
export default {
    data(){
        return {
            movienavs:[
                {id:1,title:'正在热映',path:'hotmovie'},
                {id:2,title:'即将上映',path:'comingmovie'}
            ]
        }
    }
}
</script>
<style lang="scss">
    .app-nav{
        position: fixed;
        width: 100%;
        height: 1.173333rem;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        z-index: 12;
        .city{
            font-size: .4rem;
            padding-left: .4rem;
            color: #666;
            line-height: 1.173333rem;
            position: relative;
            i{
                margin-left: 2px;
                position: absolute;
                top:.32rem;
                left: 1.28rem;
            }
        }
        .tabs{
            display: flex;
            font-size: .4rem;
            height: 1.173333rem;
            line-height: 1.173333rem;
            .tab-item{
                color: #666;
                font-weight: 700;
                flex-grow: 1;
                width: 21.33333vw;
                text-align: center;
                margin: 0 .32rem;
            }
            .active{
                color: #ef4238;
                position: relative;
                    &:after{
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 0px;
                    width: 2.133333rem;
                    width: 21.33333vw;
                    height: 2px;
                    background-color: #ef4238;
                    -webkit-transition: left .2s;
                    transition: left .2s;
                }
            }
            
        }
        .search{
            width: 1.2rem;
            height: 1.066667rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABC1JREFUWAntWEtrU1EQPpO+ArYm1Y1I3VRXgu5EoSpVQaxCxUVxYTeCv8CtoFVxW0F/gBsLiguxoBaxWHyLS0EEdWWobrRprZC+cpzv3NyTOfeR3DS3duOF5M6ZMzPflzmvOVHq/9NcBqhRdz001D43UziktR5k35382ao1bUUcIj3NL3w+EtH4xu6eZ3Tv3iL6VvskJjh/vH/Lcql0UZM6o7TamAiQ1BxpNdaazV7pfDT1I5FPwKguQT0w0FFcLF5QSp9nYhsC/smapP5wfkfz7flr9PjxQjInz6omQZO1hdJ9rdW+RoLG2RKpt60d2VONZDOW4PyRA7uX9NJDBuuJACzwhHuQ0ZmHPNe+dm1qxbxTv38t83zU28tUPqG0Phnn25ah451P33yIiBtSRRJE5pZKpfchAKJp0vpSbvO2Wzz5V0LRhIIXU8vsz29nNdFlJmsWkegutGWze5JkMkQQc252cWYqYljH850twzT+6rcAqivqwb6u4vzKbTbEqrcPhjvX3t1fb05mrEdFwIIIkSN1I3/w2KlGySEkfOCrVOamxAKGt/ikNiw7GTRDu1D6Elit44bcyEg57J5co0dGMsXnE/fZo5pJXt1tHdkdtYbaySD2OYcczzkzrE2Sw88gjoFYvLjMgjI/jbctg2ka0V+WIE4IswkLOyyI1QyrCOGIiIWYUglMYEudlC1BHF+BE6KA1SqN05ArMQs2Fp9KBtsqXMESrJyt1V7e5+ptJVXj5JKJybGlRwhbdFqCrMPBbx9swraRshAR28GWcJKgs5nihJCGacoRsR1siWUJ+iWT3+kfX347zXcwdhBbYlmCUrkOso7DtAQrxaa1w8FvGykLwdiM/T0OwhJkg+oGyg1UJXFOzeojYjvYMr4k+FF2mJJJKlKUI2I72BLKEsQdQnagnkPJ5OhSaJiYXq1oo4WwbQ+XGL6MC47iO4Tf5ncP6jnRTkWsxKwWwYxpsGOiW4K4feGCI+1QbKKek7pmZMQyBawIAkxgC5UjWoLQ4vbFWeQLTuXhShjFJkolX7Xatym3ULjK6pqxDGaNoA6wV5fRaMB+sPhi4nozJL1a8IlbCxoQGq1VC8LEKVih+Icl/2cu+Xc1XPLDAVdD5loticCcK+Hin/Kn4uF955KsbtjAFj7wNRGcL+qdW5wFTs0nlEHfeg2vnT4EF9e0QoqGc5Ov71hlQIglCLs1uLh/5lnVyyeJ3V9Bkne7M/nJV3cD3EzTWSRBA0xgXA35p151VnfQsF4bOwPHwJwDGY+U5+SRLY8Vj/SdjgpTM4PSwWQzpT+PPDLlsSSZTEzQJ8uTP5W/35KSbJigTzSNdxxJamnpyz15+Q4YNedgGiRqxfAWRnhO6pWy3ZbWlSDIR5EkpV/4P2xdh9gngffs0f17kTmQy02+mZB9/+VmMvAXE7/38O8tTYkAAAAASUVORK5CYII=) .266667rem no-repeat;
            background-size: .533333rem;
            padding: .266667rem .4rem .266667rem .266667rem;
        }
    }

</style>


