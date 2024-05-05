import React from "react";
import { Button } from "semantic-ui-react";

const Header = () => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  }

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Закрити</Button>
      <span className={'username'}>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  )
}

export default Header
