import './Deserts.css';
import 'react-router';
import { useParams } from 'react-router-dom';
import Deserts from './jsonData/datatForDatatable';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './DesertsItem.css';

type Inputs = {
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
};

function DesertsItem() {
  const { register, handleSubmit,formState:{errors}, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  const params = useParams();
  var desertId = params.desertsId;

  if (typeof (desertId) != 'undefined')
    var num: number = +desertId;

  const result = Deserts.filter((obj) => {
    return obj.id === num;
  });

  var desertItem = result[0];

  return (
    <div className="main_content">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form_holder'>

        <div className='form_item_holder'>Nazwa:
        {/* <div className='error_message'>{errors.name?.type === 'required' && "nazwa jest wymagana"}</div> */}
          <input id='name' defaultValue={desertItem['name']} 
            {
              ...register('name', { required: true, maxLength: 20 })
            }/>
        </div>

        <div className='form_item_holder'>Kalorie:
          <input id='calories' defaultValue={desertItem['calories']} {...register('calories')}/>
        </div>

        <div className='form_item_holder'>Tłuszcz:
          <input id='fat' defaultValue={desertItem['fat']} {...register('fat')}/>
        </div>

        <div className='form_item_holder'>Węglowodany:
          <input id='carbs' defaultValue={desertItem['carbs']} {...register('carbs')}/>
        </div>

        <div className='form_item_holder'>Proteina:
          <input id='protein' defaultValue={desertItem['protein']} {...register('protein')}/>
        </div>

        <input className='form_input_button' type="submit"  />
      </div>
      </form>
    </div>
  );
}

export default DesertsItem;