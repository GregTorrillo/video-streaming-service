import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo"/>
            <span className='login-user__title'>
              Who Is Watching?
            </span>
            </div>
              <div className='login-user__form'>
                <div className='login-user__user-box'>
                  <img className='login-user__user-img'src='https://randomuser.me/api/portraits/women/44.jpg'/>
                  <div className='login-user__user-name'>Jen
                  </div>
                </div>
              </div>
              <div className='login-user__buttons'>
                <button className='login-user__adult'>Add Adult</button>
                <button className='login-user__adult'>Add Kid</button>
              </div>
        </div>
    </div>
  )
}