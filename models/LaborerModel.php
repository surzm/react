<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "laborer".
 *
 * @property integer $id
 * @property string $name
 * @property string $post
 * @property integer $status
 * @property string $created_at
 * @property string $updated_at
 */
class LaborerModel extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'laborer';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'post'], 'required'],
            [['status'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name', 'post'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'post' => 'Post',
            'status' => 'Status',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
