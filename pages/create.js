import Head from 'next/head'
import { useStateContext } from '../components/Provider'
import ls from 'local-storage'
import {v4} from 'uuid'
import { useRouter } from 'next/router'

export default function CreateUser() {
  const globalState = useStateContext();
  const router = useRouter ();
  const saveUser = () => {
    let users = [],
    user;

    if(ls('users') < 1) {
      user = {
        id: v4(),
        user: globalState.user, 
        myListID: []
      }
      users.push(user)
      ls('users', users)
      router.push('/login')
      
      console.log('users:', users)
      console.log('lsusers', ls('users'))
    }else {
      users = ls('users')
      user = {
        id: v4(),
        user: globalState.user, 
        myListID: []
      }
      users.push(user)
      ls('users', users)
      console.log('users:', users)
      console.log('lsusers', ls('users'))
      router.push('/login')
    }
  }
  console.log(globalState)
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo"/>
            <span className='create-user__title'>
              Who Is Watching?
            </span>
            </div>
              <div className='create-user__form'>
                  <img className='create-user__user-img'src={globalState.defaultUserImg}/>
                  <div className='create-user__input-group'>
                    <label>Name</label>
                    <input value={globalState.user} onChange={globalState.createUserAction} type="text" className='create-user__inputText'/>
                    <div className='create-user__colors'>
                        <div className='create-user__color      create-user__color--active' style={{
                            background: 'rgb(2,0,36)',
                            background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)'}}/>
                            <div className='create-user__color' style={{
                            background: 'rgb(2,0,36)',
                            background: 'linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(112,255,0,1) 100%)'}}/>
                            <div className='create-user__color' style={{
                            background: 'rgb(2,0,36)',
                            background: 'linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(0,255,244,1) 100%)'}}/>
                            <div className='create-user__color' style={{
                            background: 'rgb(2,0,36)',
                            background: 'linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(255,0,228,1) 100%)'}}/>
                            <div className='create-user__color' style={{
                            background: 'rgb(2,0,36)',
                            background: 'linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(255,252,0,1) 100%)'}}/>
                    </div>
                  </div>
              </div>
              <div className='create-user__buttons'>
                <button className='create-user__cancel'>Cancel</button>
                <button className='create-user__save' onClick={saveUser}>Save</button>
              </div>
        </div>
    </div>
  )
}
