function calculateWages({ annualSalary, monthlyWage, weeklyWage, dailyWage, hourlyWage, hoursPerWeek }) {
    const weeksPerYear = 52;
    const workingDaysPerWeek = 5;

    // Calculate based on available data
    if (annualSalary) {
        weeklyWage = annualSalary / weeksPerYear;
        monthlyWage = annualSalary / 12;
        dailyWage = weeklyWage / workingDaysPerWeek;
        hourlyWage = weeklyWage / hoursPerWeek;
    } else if (monthlyWage) {
        annualSalary = monthlyWage * 12;
        weeklyWage = annualSalary / weeksPerYear;
        dailyWage = weeklyWage / workingDaysPerWeek;
        hourlyWage = weeklyWage / hoursPerWeek;
    } else if (weeklyWage) {
        annualSalary = weeklyWage * weeksPerYear;
        monthlyWage = annualSalary / 12;
        dailyWage = weeklyWage / workingDaysPerWeek;
        hourlyWage = weeklyWage / hoursPerWeek;
    } else if (dailyWage) {
        weeklyWage = dailyWage * workingDaysPerWeek;
        annualSalary = weeklyWage * weeksPerYear;
        monthlyWage = annualSalary / 12;
        hourlyWage = weeklyWage / hoursPerWeek;
    } else if (hourlyWage) {
        weeklyWage = hourlyWage * hoursPerWeek;
        annualSalary = weeklyWage * weeksPerYear;
        monthlyWage = annualSalary / 12;
        dailyWage = weeklyWage / workingDaysPerWeek;
    }

    return { annualSalary, monthlyWage, weeklyWage, dailyWage, hourlyWage };
}

module.exports = {
    calculateWages
};
