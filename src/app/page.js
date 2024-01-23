import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/Button"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { User } from "@/components/User"
import { Context } from "@/components/Context"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <LoginButton />
            <RegisterButton />
            <LogoutButton />
            <ProfileButton />
            <h1 className="mt-6 text-center text-sm font-bold leading-9 tracking-tight text-gray-900">
              Server Session
            </h1>
            <div className="break-words italic">{JSON.stringify(session)}</div>
            <h1 className="mt-6 text-center text-sm font-bold leading-9 tracking-tight text-gray-900">
              Client Session
            </h1>
            <User />
            <h1 className="mt-6 text-center text-sm font-bold leading-9 tracking-tight text-gray-900">
              Context
            </h1>
            <Context />
          </div>
        </div>
      </div>
    </>
  )
}
