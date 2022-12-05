
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import '../styles/globals.css'
import { useEffect, useState, useRef} from "react";
import './reactCOIServiceWorker';
import ZkappWorkerClient from './zkappWorkerClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <--

import {
  PublicKey,
  PrivateKey,
  Field,
} from 'snarkyjs'

let transactionFee = 0.1;

export default function App() {

  let [state, setState] = useState({
    zkappWorkerClient: null as null | ZkappWorkerClient,
    hasWallet: null as null | boolean,
    hasBeenSetup: false,
    accountExists: false,
    currentNum: null as null | Field,
    publicKey: null as null | PublicKey,
    zkappPublicKey: null as null | PublicKey,
    creatingTransaction: false,
  });

// --------------------------------------------------------
// Status

  const status1 = () => {
    const el = document.getElementById("status1")!
	el.style.display = "block";
	const el2 = document.getElementById("status2")!
	el2.style.display = "none";
	const el3 = document.getElementById("status3")!
	el3.style.display = "none";
	const el4 = document.getElementById("status4")!
	el4.style.display = "none";
	const el5 = document.getElementById("status5")!
	el5.style.display = "none";
	const el6 = document.getElementById("status6")!
	el6.style.display = "none";
  }
  
   const status2 = () => {
    const el = document.getElementById("status1")!
	el.style.display = "none";
	const el2 = document.getElementById("status2")!
	el2.style.display = "block";
	const el3 = document.getElementById("status3")!
	el3.style.display = "none";
	const el4 = document.getElementById("status4")!
	el4.style.display = "none";
	const el5 = document.getElementById("status5")!
	el5.style.display = "none";
	const el6 = document.getElementById("status6")!
	el6.style.display = "none";
  }
  
   const status3 = () => {
    const el = document.getElementById("status1")!
	el.style.display = "none";
	const el2 = document.getElementById("status2")!
	el2.style.display = "none";
	const el3 = document.getElementById("status3")!
	el3.style.display = "block";
	const el4 = document.getElementById("status4")!
	el4.style.display = "none";
	const el5 = document.getElementById("status5")!
	el5.style.display = "none";
	const el6 = document.getElementById("status6")!
	el6.style.display = "none";
  }
  
   const status4 = () => {
    const el = document.getElementById("status1")!
	el.style.display = "none";
	const el2 = document.getElementById("status2")!
	el2.style.display = "none";
	const el3 = document.getElementById("status3")!
	el3.style.display = "none";
	const el4 = document.getElementById("status4")!
	el4.style.display = "block";
	const el5 = document.getElementById("status5")!
	el5.style.display = "none";
	const el6 = document.getElementById("status6")!
	el6.style.display = "none";
  }
  
   const status5 = () => {
    const el = document.getElementById("status1")!
	el.style.display = "none";
	const el2 = document.getElementById("status2")!
	el2.style.display = "none";
	const el3 = document.getElementById("status3")!
	el3.style.display = "none";
	const el4 = document.getElementById("status4")!
	el4.style.display = "none";
	const el5 = document.getElementById("status5")!
	el5.style.display = "block";
	const el6 = document.getElementById("status6")!
	el6.style.display = "none";
  }
  
   const status6 = () => {
    const el = document.getElementById("status1")!
	el.style.display = "none";
	const el2 = document.getElementById("status2")!
	el2.style.display = "none";
	const el3 = document.getElementById("status3")!
	el3.style.display = "none";
	const el4 = document.getElementById("status4")!
	el4.style.display = "none";
	const el5 = document.getElementById("status5")!
	el5.style.display = "none";
	const el6 = document.getElementById("status6")!
	el6.style.display = "block";
  }
  
   const send1 = () => {
    const el = document.getElementById("send1")!
	el.style.display = "block";
	const el2 = document.getElementById("send2")!
	el2.style.display = "none";
	const el3 = document.getElementById("send3")!
	el3.style.display = "none";
	const el4 = document.getElementById("send4")!
	el4.style.display = "none";
  }
  
  const send2 = () => {
    const el = document.getElementById("send1")!
	el.style.display = "none";
	const el2 = document.getElementById("send2")!
	el2.style.display = "block";
	const el3 = document.getElementById("send3")!
	el3.style.display = "none";
	const el4 = document.getElementById("send4")!
	el4.style.display = "none";
  }
  
  const send3 = () => {
    const el = document.getElementById("send1")!
	el.style.display = "none";
	const el2 = document.getElementById("send2")!
	el2.style.display = "none";
	const el3 = document.getElementById("send3")!
	el3.style.display = "block";
	const el4 = document.getElementById("send4")!
	el4.style.display = "none";
  }
  
  const send4 = () => {
    const el = document.getElementById("send1")!
	el.style.display = "none";
	const el2 = document.getElementById("send2")!
	el2.style.display = "none";
	const el3 = document.getElementById("send3")!
	el3.style.display = "none";
	const el4 = document.getElementById("send4")!
	el4.style.display = "block";
  }
  
  const donesend = () => {
    const el = document.getElementById("send1")!
	el.style.display = "none";
	const el2 = document.getElementById("send2")!
	el2.style.display = "none";
	const el3 = document.getElementById("send3")!
	el3.style.display = "none";
	const el4 = document.getElementById("send4")!
	el4.style.display = "none";
	const el5 = document.getElementById("sendLoading")!
	el5.style.display = "none";
	const el6 = document.getElementById("sendDone")!
	el6.style.display = "block";
	const el7 = document.getElementById("sendCheck")!
	el7.style.display = "block";
	const el8 = document.getElementById("closeSend")!
	el8.style.display = "block";
  }
	
  // -------------------------------------------------------
  // Do Setup
  const connectWallet = async () => {
      if (!state.hasBeenSetup) {
        const zkappWorkerClient = new ZkappWorkerClient();
        
        console.log('Loading SnarkyJS...');
		status1();
        await zkappWorkerClient.loadSnarkyJS();
        console.log('done');

        await zkappWorkerClient.setActiveInstanceToBerkeley();

        const mina = (window as any).mina;
		status2();

        if (mina == null) {
          setState({ ...state, hasWallet: false });
		  return;
        }

        const publicKeyBase58 : string = (await mina.requestAccounts())[0];
        const publicKey = PublicKey.fromBase58(publicKeyBase58);

        console.log('using key', publicKey.toBase58());

        console.log('checking if account exists...');
        const res = await zkappWorkerClient.fetchAccount({ publicKey: publicKey! });
        const accountExists = res.error == null;

        await zkappWorkerClient.loadContract();

        console.log('compiling zkApp');
		status3();
        await zkappWorkerClient.compileContract();
        console.log('zkApp compiled');

        const zkappPublicKey = PublicKey.fromBase58('B62qrDe16LotjQhPRMwG12xZ8Yf5ES8ehNzZ25toJV28tE9FmeGq23A');

        await zkappWorkerClient.initZkappInstance(zkappPublicKey);

        console.log('getting zkApp state...');
        await zkappWorkerClient.fetchAccount({ publicKey: zkappPublicKey })
        const currentNum = await zkappWorkerClient.getNum();
        console.log('current state:', currentNum.toString());

        setState({ 
            ...state, 
            zkappWorkerClient, 
            hasWallet: true,
            hasBeenSetup: true, 
            publicKey, 
            zkappPublicKey, 
            accountExists, 
            currentNum
        });
      }
  };

  // -------------------------------------------------------
  // Newwwwww
  const connectBtnclick = () => {
    const el2 = document.getElementById("connectBtn")!
	el2.style.display = "none";
	const el3 = document.getElementById("loading")!
	el3.style.display = "block";
	const el4 = document.getElementById("banner")!
	el4.style.display = "none";
  };
  
  const hideloadingBtn = () => {
    const el2 = document.getElementById("loading")!
	el2.style.display = "none";
	const el3 = document.getElementById("succes")!
	el3.style.display = "block";
  };
  
  const closeGetclick = () => {
    const el = document.getElementById("getscreen")!
	el.style.display = "none";
	const el2 = document.getElementById("getBtnDisable")!
	el2.style.display = "none";
	const el3 = document.getElementById("getBtn")!
	el3.style.display = "block";
	const el4 = document.getElementById("sendBtnDisable")!
	el4.style.display = "none";
	const el5 = document.getElementById("sendBtn")!
	el5.style.display = "block";
  };
  
  const closeSendclick = () => {
    const el = document.getElementById("sendscreen")!
	el.style.display = "none";
	const el2 = document.getElementById("sendBtnDisable")!
	el2.style.display = "none";
	const el3 = document.getElementById("sendBtn")!
	el3.style.display = "block";
	const el4 = document.getElementById("getBtnDisable")!
	el4.style.display = "none";
	const el5 = document.getElementById("getBtn")!
	el5.style.display = "block";
	const el6 = document.getElementById("sendDone")!
	el6.style.display = "none";
    const el7 = document.getElementById("sendCheck")!
	el7.style.display = "none";
    const el8 = document.getElementById("closeSend")!
	el8.style.display = "none";
  };
  
  const getscreenShow = () => {
	const el = document.getElementById("getscreen")!
	el.style.display = "block";
	const el2 = document.getElementById("getBtn")!
	el2.style.display = "none";
	const el3 = document.getElementById("getBtnDisable")!
	el3.style.display = "block";
	const el4 = document.getElementById("sendBtnDisable")!
	el4.style.display = "block";
	const el5 = document.getElementById("sendBtn")!
	el5.style.display = "none";
  };
  
  const sendscreenShow = () => {
	const el = document.getElementById("sendscreen")!
	el.style.display = "block";
	const el2 = document.getElementById("sendBtn")!
	el2.style.display = "none";
	const el3 = document.getElementById("sendBtnDisable")!
	el3.style.display = "block";
	const el4 = document.getElementById("getBtnDisable")!
	el4.style.display = "block";
	const el5 = document.getElementById("getBtn")!
	el5.style.display = "none";
    const el6 = document.getElementById("sendLoading")!
	el6.style.display = "block";
  };
  
  const noAccount = () => {
   	const el2 = document.getElementById("caution")!
	el2.style.display = "block";
    const el3 = document.getElementById("ftxt")!
	el3.style.display = "block";
	const el4 = document.getElementById("backNoAccount")!
	el4.style.display = "block";
    const el5 = document.getElementById("loading")!
	el5.style.display = "none";
  }
  
  const backNoAccountClick = () => {
    location.reload();
  }
  
  const backNoWalletClick = () => {
    location.reload();;
  }
  
  const noWallet = () => {
    const el2 = document.getElementById("caution")!
	el2.style.display = "block";
    const el3 = document.getElementById("walletTxt")!
	el3.style.display = "block";
	const el4 = document.getElementById("backNoWallet")!
	el4.style.display = "block";
    const el5 = document.getElementById("loading")!
	el5.style.display = "none";
  }
  
  const getload = () => {
    const el = document.getElementById("getLoading")!
	el.style.display = "block";
	const el2 = document.getElementById("gettext")!
	el2.style.display = "none";
	const el3 = document.getElementById("getnumber")!
	el3.style.display = "none";
  }
  
  const getdone = () => {
    const el = document.getElementById("getLoading")!
	el.style.display = "none";
	const el2 = document.getElementById("gettext")!
	el2.style.display = "block";
	const el3 = document.getElementById("getnumber")!
	el3.style.display = "block";
  }
  // -------------------------------------------------------
 
   // -------------------------------------------------------
  // Send a transaction

  const onSendTransaction = async () => {
    setState({ ...state, creatingTransaction: true });
	send1();
    console.log('sending a transaction...');

    await state.zkappWorkerClient!.fetchAccount({ publicKey: state.publicKey! });

    await state.zkappWorkerClient!.createUpdateTransaction();

    console.log('creating proof...');
	send2();
    await state.zkappWorkerClient!.proveUpdateTransaction();

    console.log('getting Transaction...');
	send3();
    const transactionJSON = await state.zkappWorkerClient!.getTransactionJSON()

    console.log('waiting confirmation...');
	send4();
    const { hash } = await (window as any).mina.sendTransaction({
      transaction: transactionJSON,
      feePayer: {
        fee: transactionFee,
        memo: '',
      },
    });

    console.log(
      'See transaction at https://berkeley.minaexplorer.com/transaction/' + hash
    );

	donesend();

    setState({ ...state, creatingTransaction: false });
  }
  
   // -------------------------------------------------------
  // Refresh the current state

  const onRefreshCurrentNum = async () => {
    console.log('getting zkApp state...');
	getload();
    await state.zkappWorkerClient!.fetchAccount({ publicKey: state.zkappPublicKey! })
    const currentNum = await state.zkappWorkerClient!.getNum();
    console.log('current state:', currentNum.toString());
	getdone();

    setState({ ...state, currentNum });
  }
 
  let hasWallet;
  if (state.hasWallet != null && !state.hasWallet) {
    const auroLink = 'https://www.aurowallet.com/';
    hasWallet = <a id="walletLink" style={{display: 'block'}} href={auroLink} target="_blank" rel="noreferrer">
		<h1 className={styles.walletLink}>[[CLICK HERE]]</h1>
	</a>
	status4();
	noWallet();

  }

  let setupText = state.hasBeenSetup ? 'SnarkyJS Ready' : 'Loading...';
  let setup = <div id="setup" style={{display: 'block'}}> { setupText } { hasWallet }</div>
  
  let accountDoesNotExist;
  if (state.hasBeenSetup && !state.accountExists) {
	  const faucetLink = "https://faucet.minaprotocol.com/?address=" + state.publicKey!.toBase58();
	accountDoesNotExist = <a id="flink" style={{display: 'block'}} href={faucetLink} target="_blank" rel="noreferrer">
		<h1 className={styles.faucetHere}>[[CLICK HERE]]</h1>
	</a>
	status5();
	noAccount();
	hasBeenSetup: false;
  }
  
  let mainContent;
  if (state.hasBeenSetup && state.accountExists) {	
    mainContent =
		<div>
			<a id="sendBtn" style={{display: 'block'}} onClick={() => {onSendTransaction(); sendscreenShow(); }}>
					<span className={styles.sendBtn}> </span>
			</a>
			
			<a id="getBtn" style={{display: 'block'}} onClick={() => {onRefreshCurrentNum(); getscreenShow(); }}>
					<span className={styles.getBtn}></span>
			</a>
			
			<span id="getBtnDisable" style={{display: 'none'}} className={styles.getBtnDisable}></span>
			<span id="sendBtnDisable" style={{display: 'none'}} className={styles.sendBtnDisable}></span>
			
			<h1 className={styles.txtAddrs}>{  state.publicKey!.toBase58() } </h1>
			
			<div id="getscreen" style={{display: 'none'}} className={styles.getscreen}>
				<span className={styles.getscreenBlack}> </span>
				<span className={styles.getscreenImg}> </span>
				
				<a id="closeGet" style={{display: 'block'}} onClick={() => {closeGetclick(); }}>
					<span className={styles.closeGet}> </span>
				</a>
				
				<span id="getLoading" style={{display: 'none'}} className={styles.getLoading}> </span>
				
				<h1 id="gettext" style={{display: 'none'}} className={styles.txtState}>Current Number in ZkApp :</h1>
				<h1 id="getnumber" style={{display: 'none'}} className={styles.numState}>{ state.currentNum!.toString() } </h1>
			</div>
			
			<div id="sendscreen" style={{display: 'none'}} className={styles.sendscreen}>
				<span className={styles.sendscreenBlack}> </span>
				<span className={styles.sendscreenImg}> </span>
				
				<a id="closeSend" style={{display: 'none'}} onClick={() => {closeSendclick(); }}>
					<span className={styles.closeSend}> </span>
				</a>
				
				<span id="sendLoading" style={{display: 'none'}} className={styles.sendLoading}> </span>
				<span id="sendCheck" style={{display: 'none'}} className={styles.sendCheck}> </span>
				<span id="sendDone" style={{display: 'none'}} className={styles.sendDone}> </span>
				
				<h1 id="send1" style={{display: 'none'}} className={styles.statusSendTxt}>Sending Transaction...</h1>
				<h1 id="send2" style={{display: 'none'}} className={styles.creatingProof}>Creating Proof...</h1>
				<h1 id="send3" style={{display: 'none'}} className={styles.statusSendTxt}>Getting Transaction ...</h1>
				<h1 id="send4" style={{display: 'none'}} className={styles.statusSendTxt}>Waiting Confirmation...</h1>


			</div>

		</div>
	hideloadingBtn();
	status6();
  }
	
  return (
	<div className={styles.container}>	
	  <Head>
        <title>zkApp /shdx/</title>
        <meta name="description" content="ZkApp Browser UI" />
		<meta name="viewport" content="width=1280, initial-scale=2.0"/>
        <link href="data:image/png;base64,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" rel="icon" type="image/x-icon" />
	  </Head>
	  
		<main className={styles.main}>
		
			<div id="homepage" className={styles.homepage}>
				<span className={styles.homepageImg}> </span>
				<a id="connectBtn" style={{display: 'block'}} onClick={() => {connectBtnclick(); connectWallet();}}>
					<span className={styles.connectBtn}> </span>
				</a>
				
					<span id="loading" style={{display: 'none'}} className={styles.loading}> </span>
					
					<h1 id="status1" style={{display: 'none'}} className={styles.statusTxt}>Synchronizing & Checking Wallet...</h1>
					<h1 id="status2" style={{display: 'none'}} className={styles.connectkWallet}>Connecting to Wallet...</h1>
					<h1 id="status3" style={{display: 'none'}} className={styles.checkWallet}>Checking Wallet...</h1>
					<h1 id="status4" style={{display: 'none'}} className={styles.noWallet}>Wallet Not Found!</h1>
					<h1 id="status5" style={{display: 'none'}} className={styles.noWallet}>Address Not Valid!</h1>
					<h1 id="status6" style={{display: 'none'}} className={styles.walletConnected}>Wallet Connected</h1>
					
					<span id="caution" style={{display: 'none'}} className={styles.caution}> </span>
					
					<span id="succes" style={{display: 'none'}} className={styles.succes}> </span>

					<h1 id="ftxt" style={{display: 'none'}} className={styles.faucetTxt}>Invalid Account or No Balance!! Please check and fund on this link </h1>
					
					<h1 id="walletTxt" style={{display: 'none'}} className={styles.walletTxt}>Please Install Auro wallet and Retry!! </h1>
					
					<a id="backNoAccount" style={{display: 'none'}} onClick={() => {backNoAccountClick(); }}>
						<span className={styles.backNoAccount}> </span>
					</a>
					
					<a id="backNoWallet" style={{display: 'none'}} onClick={() => {backNoWalletClick(); }}>
						<span className={styles.backNoWallet}> </span>
					</a>
					
					<span id="banner" style={{display: 'block'}} className={styles.banner}> </span>
					
				{mainContent}
				{accountDoesNotExist}
				{hasWallet}
				
			<div id="footer" style={{display: 'block'}} >	
				<a style={{display: 'block'}} href="https://twitter.com/shdx08" target="_blank" rel="noopener noreferrer" >
						<span className={styles.twitter}></span>
					</a>
					
				<a style={{display: 'block'}} href="https://discordapp.com/users/994149179519676436" target="_blank" rel="noopener noreferrer" >
						<span className={styles.discord}> </span>
					</a>
					
				<a style={{display: 'block'}} href="https://github.com/shdx8" target="_blank" rel="noopener noreferrer" >
						<span className={styles.github}> </span>
					</a>
			</div>
					
			</div>
		</main>
		
	<footer className={styles.footer}>
		</footer>


	</div>
  );
}
