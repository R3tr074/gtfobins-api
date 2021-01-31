import Head from "next/head";

const Index = () => (
  <>
    <main>
      <div>
        <a className="logo" href="/docs">
          <img alt="Gtfobins logo" src="/assets/logo.png" />
        </a>
      </div>
    </main>
    <style jsx global>
      {`
        * {
          box-sizing: border-box;
          margin: 0;
          outline: 0;
          padding: 0;
        }
        html,
        body {
          height: 100%;
        }
        body {
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        main > a {
          color: #fff;
          font-size: 2em;
          text-decoration: none;
        }
      `}
    </style>
  </>
);

export default Index;
