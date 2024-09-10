export default function LeftAsideNav() {
  return (
    <aside className="hidden rotate-90 min-[330px]:block float-right fixed bottom-1/4 right-0 -mr-16 md:-right-11">
      <div className="relative">
        <p>Copyright © Ken Lu</p>
        <div className="absolute right-1/2 top-1/2 translate-x-[157%] w-[160px] border-t-[0.1px] border-current"></div>
      </div>
    </aside>
  )
}