

import Example from './example.js';
import $ from './jquery.js';

export default class DemoBase {
    constructor() {
        this.demo = new Example();
    }

    _globalVar() {
        if( window.DATA_API ) {
            this.demo.updateAPI( window.DATA_API );
        }

        if( window.USERNAME ) {
            this.demo.userName = window.USERNAME;
        }

        if( window.USERID ) {
            this.demo.userId = window.USERID;
        }

        if( window.ALLDATA ) {
            this.demo.alldata = window.ALLDATA;
        }
    }

    initDict() {
        this._globalVar();

        let demo = this.demo;
        let _this = this;

        /*
        console.log( demo.api );
        console.log( demo.userName );
        console.log( demo.userId );
        console.log( demo.alldata );
        */

        let srcData = $( '#srcData' )
            , newData = $( '#newData' )
            , descData = $( '#descData' )
            , outputData = $( '#outputData' )
            , procBtn = $( '#procBtn' )
            , alldata = $( '#alldata' )
            , userName = $( '#userName' )
            , userId = $( '#userId' )
            , outputText = $( '#outputText' )
            ;

        userName.val( demo.userName );
        userId.val( demo.userId );
        alldata.prop( 'checked', !!demo.alldata );

        demo.fetchData( ( data  ) => {
            data[ 0 ] = this.clone( data[ 0 ] || {} );
            data[ 1 ] = this.clone( data[ 1 ] || {} );
            data[ 2 ] = this.clone( data[ 2 ] || {} );

            srcData.val( JSON.stringify( data[0], null, 4 ) );
            newData.val( JSON.stringify( data[1], null, 4 ) );

            let generatedData = this.generatorDict( ...data );
            console.log( 'generatedData:', generatedData );

            descData.val( JSON.stringify( generatedData, null, 4 ) );
        });

        procBtn.on( 'click', function(){

        });
    }

    generatorDict( sdata, ndata, ddata ) {
        let r = {};

        console.log( sdata, ndata, ddata );

        r = Object.assign( r, ddata );

        return r;
    }

    clone( json ){
        return JSON.parse( JSON.stringify( json ) );
    }

    init() {
        this._globalVar();

        let demo = this.demo;
        let _this = this;

        /*
        console.log( demo.api );
        console.log( demo.userName );
        console.log( demo.userId );
        console.log( demo.alldata );
        */

        let srcData = $( '#srcData' )
            , newData = $( '#newData' )
            , descData = $( '#descData' )
            , outputData = $( '#outputData' )
            , procBtn = $( '#procBtn' )
            , alldata = $( '#alldata' )
            , userName = $( '#userName' )
            , userId = $( '#userId' )
            , outputText = $( '#outputText' )
            ;

        userName.val( demo.userName );
        userId.val( demo.userId );
        alldata.prop( 'checked', !!demo.alldata );

        demo.run( ( data, pdd )=>{
            let debugData = pdd.debugData();
            console.log( 'debugData', debugData );
            console.log( 'diffData', debugData.SRC.diffData );
            console.log( 'dictData', debugData.SRC.dictData );

            console.log( 'data', data );

            srcData.val( JSON.stringify( debugData.SRC.srcData, null, 4 ) );
            newData.val( JSON.stringify( debugData.SRC.newData, null, 4 ) );
            descData.val( JSON.stringify( debugData.SRC.descData, null, 4 ) );


            outputData.val( JSON.stringify( data, null, 4 ) );
            outputText.html( demo.outputHtml( data ) );
        });

        procBtn.on( 'click', function(){
            let tmpSrc = JSON.parse( _this.getFormJsonVal( srcData) )
                , tmpNew = JSON.parse( _this.getFormJsonVal( newData ) )
                , tmpDesc  = JSON.parse( _this.getFormJsonVal( descData ) )
                ;

            console.clear();

            //console.log( tmpSrc, tmpNew, tmpDesc,  alldata.prop( 'checked' ));

            outputData.val( '' );
            outputText.html( '' );

            demo.update( tmpSrc, tmpNew, tmpDesc );

            demo.alldata = alldata.prop( 'checked' ) ? 1 : 0;
            demo.userName = ( userName.val() || '' ).trim();
            demo.userId = ( userId.val() || '' ).trim();

            if( $.isEmptyObject( tmpSrc ) && $.isEmptyObject( tmpNew ) ){
                return;
            }

            demo.run( ( data, pdd )=>{
                setTimeout( ()=>{

                    let debugData = pdd.debugData();
                    console.log( 'debugData', debugData );
                    console.log( 'diffData', debugData.SRC.diffData );
                    console.log( 'dictData', debugData.SRC.dictData );

                    console.log( 'data', data );

                    outputData.val( JSON.stringify( data, null, 4 ) );
                    outputText.html( demo.outputHtml( data ) );

                }, 500 );
            });

        });


    }

    getFormJsonVal( item ) {
        let r = ( item.val() || '' ).trim();

        r = r || '{}';

        return r;
    }

}
