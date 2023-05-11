import { useState } from 'react'
import Header from './header'
import classNames from '../util/classNames'

export default function GrantApplication() {
  const [grantAmount, setGrantAmount] = useState<number>(0)
  const [hasName, setHasName] = useState<boolean | null>(null)
  return (
    <div className={'p-4'}>
      <Header />
      <div className={'py-4'}>
        <div className={'p-2'}>What should we call your organization?</div>
        <input className={'w-1/2 p-2'} placeholder={"Hawai'i People's Fund"} />
      </div>
      <div className={'py-4'}>
        <div className={'p-2'}>How much money are you requesting?</div>
        <div className={'p-2 flex gap-4'}>
          <div
            className={classNames(
              grantAmount === 500 ? `border-blue-500` : `border-transparent`,
              `p-2 border border-2 rounded-lg`
            )}
            onClick={() => setGrantAmount(500)}
          >
            $500
          </div>
          <div
            className={classNames(
              grantAmount === 1000 ? `border-blue-500` : `border-transparent`,
              `p-2 border border-2 rounded-lg`
            )}
            onClick={() => setGrantAmount(1000)}
          >
            $1000
          </div>
          <div
            className={classNames(
              grantAmount === 2500 ? `border-blue-500` : `border-transparent`,
              `p-2 border border-2 rounded-lg`
            )}
            onClick={() => setGrantAmount(2500)}
          >
            $2500
          </div>
          <div
            className={classNames(
              grantAmount === 5000 ? `border-blue-500` : `border-transparent`,
              `p-2 border border-2 rounded-lg`
            )}
            onClick={() => setGrantAmount(5000)}
          >
            $5000
          </div>
          <input
            type='number'
            min={1}
            max={5000}
            className={classNames(
              grantAmount !== 500 &&
                grantAmount !== 1000 &&
                grantAmount !== 2500 &&
                grantAmount !== 5000 &&
                grantAmount !== 0
                ? `border-blue-500`
                : `border-transparent`,
              `p-2 border border-2 rounded-lg outline-none`
            )}
            onChange={(e) =>
              e.target.value
                ? setGrantAmount(parseInt(e.target.value))
                : setGrantAmount(0)
            }
            placeholder={'Other'}
          />
        </div>
      </div>
      <div className={'py-4 p-2'}>
        <div>Do you have a project name?</div>
        <div className={'flex gap-4 py-2'}>
          <button
            className={classNames(
              hasName ? `border-blue-500` : `border-transparent`,
              `p-2 border border-2 rounded-lg outline-none`
            )}
            onClick={() => setHasName(true)}
          >
            Yes
          </button>
          <button
            className={classNames(
              hasName === false ? `border-blue-500` : `border-transparent`,
              `p-2 border border-2 rounded-lg outline-none`
            )}
            onClick={() => setHasName(false)}
          >
            No
          </button>
        </div>
      </div>
      {hasName && (
        <div className={'py-4'}>
          <div className={'p-2'}>What is your project called?</div>
          <input className={'w-1/2 p-2'} placeholder={'Best project ever'} />
        </div>
      )}
      <div className={'py-4'}>
        <div className={'p-2'}>
          Who will be your point of contact for this application?
        </div>
        <input className={'w-1/2 p-2'} placeholder={'Matthew Ing'} />
      </div>
      <div className={'p-2'}>What does your organization do?</div>
      <input className={'w-1/2 p-2'} placeholder={'We know how to have fun'} />
      <div className={'py-4'}>
        <div className={'p-2'}>Who are your members?</div>
        <input
          className={'w-1/2 p-2'}
          placeholder={'You know you are a member when you wear Locals'}
        />
      </div>
    </div>
  )
}
