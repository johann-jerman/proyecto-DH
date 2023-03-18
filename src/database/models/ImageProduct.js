module.exports = (sequelize,DataType) => {
    const alias = "Image";

    const cols =  {
        id : {
            primaryKey : true,
            autoIncrement : true,
            type : DataType.INTERGER
        },

        image : {
            type : DataType.STRING(255),
            
        },
        
    };
    
    const config =  {
        tableName : "imagesProduct",
        timestamp : true,
        underscored : true,
        paranoid : true,
        created_at : "created_at",
        updated_at : "updated_at",
        deleted_at : "deleted_at",
    }

    const ImageProduct = sequelize.define(alias,cols,config);

    return ImageProduct;
}