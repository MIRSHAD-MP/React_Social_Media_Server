export default (otp) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div
        style="
          font-family: Helvetica, Arial, sans-serif;
          line-height: 2;
        ">
        <div style="margin: 50px auto; width: 70%; padding: 20px 0">
          <div style="border-bottom: 1px solid #eee">
            <a
              href=""
              style="
                font-size: 1.4em;
                color: #00466a;
                text-decoration: none;
                font-weight: 600;
              "
              >Company Name</a
            >
          </div>
          <p style="font-size: 1.1em">Hi,</p>
          <p>
            You have requested to reset the password of your account.Pleas find the security code to change your password
          </p>
          <h2
            style="
              background: #00466a;
              margin: 0 auto;
              width: max-content;
              padding: 0 10px;
              color: #fff;
              border-radius: 4px;
            ">
          ${otp}
          </h2>
          <p style="font-size: 0.9em">Regards,<br />Your Brand</p>
          <hr style="border: none; border-top: 1px solid #eee" />
          <div
            style="
              float: right;
              padding: 8px 0;
              color: #aaa;
              font-size: 0.8em;
              line-height: 1;
              font-weight: 300;
            ">
            <p>Your Brand Inc</p>
            <p>1600 Amphitheatre Parkway</p>
            <p>California</p>
          </div>
        </div>
      </div>
    </body>
  </html>`;
};
