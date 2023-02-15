<script setup lang="ts">

export interface ICovid {
  date:           string;
  last_update:    string;
  confirmed:      number;
  confirmed_diff: number;
  deaths:         number;
  deaths_diff:    number;
  recovered:      number;
  recovered_diff: number;
  active:         number;
  active_diff:    number;
  fatality_rate:  number;
}

export type TCovidHeaders = keyof ICovid

const headers: TCovidHeaders[] = [
  'confirmed_diff', 'date', 'deaths_diff', 'active_diff'
]

const data = reactive<ICovid[]>(
  [{
    date: "2022-01-19",
    last_update: "2022-01-20 04:21:07",
    confirmed: 3963917,
    confirmed_diff: 13143,
    deaths: 105236,
    deaths_diff: 177,
    recovered: 0,
    recovered_diff: 0,
    active: 3858681,
    active_diff: 12966,
    fatality_rate: 0.0265,
  }]
)

</script>

<template>
  <section>
    <header>
      <h5> 
        Covid 19 
      </h5>
    </header>
    <main>
      <table>
        <thead>
          <tr>
            <template v-for="header of headers">
                <th> 
                  {{ header }} 
                </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <template v-for="item of data">
            <tr>
              <template v-for="header of headers">
                <th> 
                  {{ item[header] }} 
                </th>
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    </main>
    <footer>
      <button> refresh </button>
    </footer>
  </section>
</template>