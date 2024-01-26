// Todo

// <!-- Add dynamic number --> items left

// All
// Active
// Completed

// Clear Completed

// Drag and drop to reorder list
export default function Home() {
  return (
    <>
      <header>
        <h1>TODO</h1>

        <div>
          <button>Light</button>
        </div>
      </header>
      <main>
        <section>
          <input
            type='text'
            placeholder='Create a new todo...'
          />
        </section>

        <section>
          <ul>
            <li>
              <div>
                <svg
                  xmlns='http://www.w4.org/2000/svg'
                  width='11'
                  height='9'>
                  <path
                    fill='none'
                    stroke='#FFF'
                    stroke-width='1'
                    d='M1 4.304L3.696 7l6-6'
                  />
                </svg>
                <input
                  type='checkbox'
                  id='is-complete'
                />
              </div>
              <p>Jog around the park 3x</p>

              <button>X</button>
            </li>
          </ul>

          <div>
            <p>5 items left</p>
            <button>Clear Completed</button>
          </div>
        </section>

        <section>
          <nav>
            <a href='#'>All</a>
            <a href='#'>Active</a>
            <a href='#'>Completed</a>
          </nav>
        </section>

        <section>
          <p>Drag and drop to reorder list</p>
        </section>
      </main>
    </>
  );
}
