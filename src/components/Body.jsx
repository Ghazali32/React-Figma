import { Path } from './Path'
import background from '../assets/background.svg'
import { InfoComponent } from './InfoComponent'
import { Details } from './Details'
import { StepComponent } from './StepComponent'
import check  from '../assets/check.svg'
import { LandMark } from './LandMark'
import {Map} from './Map'


export function Body() {
    return <div className="min-h-96 w-11/12">
        <div className="flex mt-7 ml-6 p-3">
            <Path text={'jMarkeyt'}></Path>
            <Path text={'Category 1'}></Path>
            <Path text={'Theme park site'}></Path>
        </div>
        <div className='mt-5 ml-6 p-3'>
            <img className='w-11/12' src={background} />
        </div>
        <InfoComponent></InfoComponent>
        <div className='flex p-3 justify-center'>
            <div className='flex flex-col'>
                <Details heading={'Overview'} subHeading={'Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.'}></Details>
                <Details heading={'Why?'} subHeading={'Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.'}></Details>
                <Details heading={'What?'} subHeading={'Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.'}></Details>
                <LandMark></LandMark>
                <Map></Map>
            </div>
            <div className='flex flex-col'>
                <StepComponent title={'Complete profile'}buttonText = {'Complete'}></StepComponent>
                <StepComponent title={'Step 1'} buttonText = {'pay'}></StepComponent>
                <StepComponent title={'Step 2'} buttonText = {'pay'}></StepComponent>
                <StepComponent title={'Step 3'}buttonText = {'Complete'}></StepComponent>
                <StepComponent title={'Step 4'}buttonText = {'Complete'}></StepComponent>
                <StepComponent title={'Step 5'}buttonText = {'Complete'}></StepComponent>
            </div>
        </div>
    </div>
}