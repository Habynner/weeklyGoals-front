interface CreateGoalReq {
  title: string
  desiredWeeklyFrequecy: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequecy,
}: CreateGoalReq) {
  const res = await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequecy,
    }),
  })
  const data = await res.json()

  return data.pendingGoals
}
