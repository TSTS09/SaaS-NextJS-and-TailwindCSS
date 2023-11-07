import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"

const page = async () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const apiResponse = await fetch('/api/whatever')
    
}

export default page