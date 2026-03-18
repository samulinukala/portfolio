const Register=()=>
{
  const userRef= useRef("");
  const errRef=useRef("")
  const [user,setUser]=useState('');
  const [validName,setValidName]=useState(false);
  const [userFocus,setUserFocus]=useState(false);
  const [pwd,setPwd]=useState('');
  const [validPwd,setValiPwd]=useState(false);  
  const [pwdFocus,setPwdFocus]=useState(false);
  
  const [matchPwd,setMatchPwd]=useState('');
  const [validMatch,setValiMatch]=useState(false);
  const [matchFocus,setMatchFocus]=useState(false);
  const [errMsg,setErrMsg]=useState('');
  const [success,setSuccess]=useState(false);
 
  useEffect(()=>
  {
    userRef.current.focus();
  },[])

  useEffect(()=>{
    const result=USER_REGEX.test(user);
    console.log(result)
    console.log(user);
    setValidName(result);
  },[user])

   useEffect(()=>{
    const result=PWD_REGEX.test(pwd);
    console.log(result)
    console.log(pwd);
    setValiPwd(result);
    const match=pwd===matchPwd;
    setValiMatch(match);
  },[pwd,matchPwd])
  useEffect(()=>{
    setErrMsg('');
  },[user,pwd,matchPwd])
 


return (
  <section>
    <h1>KEEP IN MIND THAT THIS IS A WORK IN PROGRESS AND MAY NOT BE COMPLETELY SECURE</h1>
    <p ref={errRef} className={errMsg ? "errmsg":"offscreen"}></p>
    <h1>Register</h1>
    <form >
      <label htmlFor='username'>
        Username:
      </label>
      <input 
          type='text'
          id='username'
          ref={userRef}
          autoComplete='off'
          onChange={(e)=>setUser(e.target.value)}
          required
          onFocus={()=>setUserFocus(true)}
          onBlur={()=>setUserFocus(false)}
          className='bg-green-500'></input>
          <p className={userFocus&&user&&! validName ? "instructions":"offscreen"}>
          4to24 chr  mustbeletter start abc num and _ - allowed. 
          </p>
       
        
        <label htmlFor='password'>
          Password: 
        </label>
        <input type="password"
        id='password'
        autoComplete='off'
        onChange={((e)=>setPwd(e.target.value))}
        required
        className='bg-green-500'
        onFocus={()=>setPwdFocus(true)}
        onBlur={()=>setPwdFocus(false)}>
        </input>
        <p id='pwdnote' className={pwdFocus&&!validPwd?"instrructions":"offscreen"}>
        8 to 24 chr
        upper lower case num special
        ?,@,#,$,%
        </p>
        <label htmlFor='confirm_pwd'>
          Confirm:
        </label>
        <input type='password'
        id='confirm_pwd'
        onChange={(e)=>setMatchPwd(e.target.value)}
        required
        className='bg-green-500'
        onFocus={()=>setMatchFocus(true)}
        onBlur={()=>setMatchFocus(false)}>
        </input>
    </form>
    
  </section>
)

}
