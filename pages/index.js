import Head from 'next/head';
import {useState} from 'react';
import {useForm} from 'react-hook-form';

export default function Home() {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();
	const [formData, setFormData] = useState('');
	const onSubmit = data => {
		const message = `
    ${data.title}
    <br />
    ${data.callType}
    <br />
    ${data.callAction}
    <br />
    Risk : ${data.risk}
    <br />
    Entry 👉: ${data.entry} 
    <br />
    Stop 🛑: ${data.stopLoss}
    <br />
    Target-1 : ${data.tp1}+ ${data.tp1Percentage}% 🎯
    <br />
    Target-2 : ${data.tp2}+ ${data.tp2Percentage}% 🎯🎯
    <br />
    Target-3 : ${data.tp3}+ ${data.tp3Percentage}% 🎯🎯🎯
    <br />
    <br />
    <br />
    WE ARE NOT FINANCIAL ADVISORS ⚡
    <br />
    WE ARE NOT RESPONSIBLE FOR YOUR MONEY 💰
    <br />
    ALWAYS DO YOUR OWN RESEARCH 📚
    `;
		return setFormData(message);
	};
	console.log(errors);
	return (
		<>
			<Head>
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
					crossOrigin='anonymous'
				/>
			</Head>
			<style>
				{`
        form{
          display: flex;
          flex-direction: column;
        }
        input,select{
          margin: 6px;
        }
        `}
			</style>
			<div className='container'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						placeholder='Title'
						{...register('title', {required: true})}
					/>
					<select {...register('callType', {required: true})}>
						<option value='SPOT'>SPOT</option>
						<option value='FUTURES'>FUTURES</option>
					</select>
					<select {...register('callAction', {required: true})}>
						<option value='LONG/BUY'>LONG/BUY</option>
						<option value='SHORT/SELL'>SHORT/SELL</option>
					</select>
					<select {...register('risk', {required: true})}>
						<option value='LOW'>LOW</option>
						<option value='MEDIUM'>MEDIUM</option>
						<option value='HIGH'>HIGH</option>
						<option value='VERY HIGH'>VERY HIGH</option>
					</select>
					<input
						type='number'
						placeholder='Entry Price'
						{...register('entry', {required: true})}
					/>
					<input
						type='number'
						placeholder='Stop Loss'
						{...register('stopLoss', {})}
					/>
					<input
						type='number'
						placeholder='TP1'
						{...register('tp1', {required: true})}
					/>
					<input
						type='number'
						placeholder='TP1 Percentage'
						{...register('tp1Percentage', {required: true})}
					/>
					<input type='number' placeholder='TP2' {...register('tp2', {})} />
					<input
						type='number'
						placeholder='TP2 Percentage'
						{...register('tp2Percentage', {})}
					/>
					<input type='number' placeholder='TP3' {...register('tp3', {})} />
					<input
						type='number'
						placeholder='TP3 Percentage'
						{...register('tp3Percentage', {})}
					/>

					<input type='submit' />
				</form>
				<div dangerouslySetInnerHTML={{__html: formData}} />
			</div>
		</>
	);
}
