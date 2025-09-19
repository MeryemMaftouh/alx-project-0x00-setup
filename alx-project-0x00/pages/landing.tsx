import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
        <div className="flex gap-4 mt-6">
        <Button title="Small" styles="text-sm px-2 py-1 rounded-sm" />
        <Button title="Medium" styles="text-md px-4 py-2 rounded-md" />
        <Button title="Large" styles="text-lg px-6 py-3 rounded-full" />
      </div>
    </div>
  )
}
export default Landing