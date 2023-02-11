import * as Dialog from '@radix-ui/react-dialog';
import { NotePencil, Plus, X } from "phosphor-react";

import logoImage from '../assets/logo.svg';
import { HabitsListToEdit } from './HabitsListToEdit';
import { Modal } from './Modal';
import { NewHabitForm } from './NewHabitForm';

export function Header() {
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt='Logo Habits' />

      <div className='flex items-center'>
        <Modal
          header={(
            <>
              <Plus size={20} className='text-violet-500' />
              Novo Hábito
            </>
          )}
          title='Criar hábito'
          body={<NewHabitForm />}
        />

        <Modal
          header={(
            <>
              <NotePencil size={20} className='text-violet-500' />
              Editar Hábitos
            </>
          )}
          title='Hábitos cadastrados'
          body={<HabitsListToEdit />}
        />
      </div>
    </div >
  )
}