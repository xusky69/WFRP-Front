
export const CollapsableContent = ({ title, children }) => (
  <div className=" w-12/12 card bg-base-200 text-neutral-content shadow-xl">
    <div className="card-body p-0">
      <div tabIndex={0} className="collapse collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title">
          <h2 className="card-title">
            {title}
          </h2>
        </div>
        <div className='collapse-content'>
          {children}
        </div>
      </div>
    </div>
  </div>
)