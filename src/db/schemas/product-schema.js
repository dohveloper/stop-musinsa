import {Schema} from 'mongoose';

const ProductSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
      brand: {
        type: String,
        required: true,
      },
      sex: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      colors: [
        {
          color: {
            type: Schema.Types.ObjectId,
            ref: 'colors',
          },
        },
      ],
      sizes: [
        {
          size: {
            type: Schema.Types.ObjectId,
            ref: 'sizes',
          },
        },
      ],
      categories: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true,
      },
    },
    {
      collection: 'products',
      timestamps: true,
    },
);

export {ProductSchema};
