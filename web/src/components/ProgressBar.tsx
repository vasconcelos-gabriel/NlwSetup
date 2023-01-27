interface ProgressBarProps {
  progress: number
}
const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div className="h-3 rounded-xl bg-slate-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="progresso de habitos completados nesse dia"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600 transition-all"
        style={{
          width: `${props.progress}%`
        }}
      />
    </div>
  )
}

export default ProgressBar
