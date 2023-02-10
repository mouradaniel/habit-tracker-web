import * as Checkbox from '@radix-ui/react-checkbox';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Trash, NotePencil } from 'phosphor-react';

import { api } from '../lib/axios';

interface HabitProps {
  id: string;
  title: string;
  created_at: string;
  dayHabits: {
    day_id: string;
  }[]
}

export function HabitsListToEdit() {
  const [habits, setHabits] = useState<HabitProps[]>()

  useEffect(() => {
    api.get('/habits')
      .then((response) => {
        setHabits(response.data)
      })
  }, [])

  function goToEditHabitForm(habitId: string) {

  }

  async function deleteHabit(habitId: string) {
    try {
      await api.delete(`/habits/${habitId}`)
      setHabits(prevState => prevState?.filter(habit => habit.id !== habitId))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='mt-6 flex flex-col gap-3'>
      {habits?.map(habit => {
        return (
          <div 
            key={habit.id}
            className='flex items-center justify-between'
          >
            <div className='flex items-center'>
              <button 
                type='button'
                onClick={() => goToEditHabitForm(habit.id)}
              >
                <NotePencil size={20} className='text-violet-500 mr-2' />
              </button>

              {habit.title}
            </div>

            <button
              type='button'
              onClick={() => deleteHabit(habit.id)}
            >
              <Trash size={20} className='text-red-500' />
            </button>
          </div>
        )
      })}
    </div>
  )
}