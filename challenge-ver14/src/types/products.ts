export interface IProducts {
    fields:{
        productName: string;
        jarSize : string;
        jarSize2 : string
        productPic:{
            fields:{
                file:{
                    url:string;
                }
            }
        };
    }
}
