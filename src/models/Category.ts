import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Category extends Model {
  declare category_id: number;
  declare name: string;
  declare last_update: Date;
}

Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "category",
    timestamps: false,
  }
);

export default Category;
