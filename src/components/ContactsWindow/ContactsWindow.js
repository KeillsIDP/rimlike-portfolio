import kwork from '../../img/kwork.png'
import mail from '../../img/mail.png'
import telegram from '../../img/telegram.png'

import './ContactsWindow.css'

export const ContactsWindow = () => {
    return(
        <div className="contacts-window">
            <div className="contact">
                <img src={telegram}/>
                <h1><a href="https://t.me/@Keills">- @Keills</a></h1>
            </div>
            <div className="contact">
                <img src={mail}/>
                <h1>- intdimplay@gmail.com</h1>
            </div>
            <div className="contact">
                <img src={kwork}/>
                <h1><a href="https://kwork.ru/user/keills">- Keills</a></h1>
            </div>
        </div>
    )
}