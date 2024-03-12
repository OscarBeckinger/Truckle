#!/bin/bash
# check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}


current_dir=$(basename "$(pwd)")

# check if the current dir is project dir
if [ "$current_dir" == "truckle" ]; then
    echo "Thanks for running this script in the project directory (truckle)"
else
    echo "Please run this script in the top level project directory (truckle)"
    exit 1
fi


# check if yarn is installed
if ! command_exists yarn; 
then
    echo "Yarn is not installed."
    read -p "Do you want to install yarn with npm? (y/n): " answer
    if [[ "$answer" == "y" ]]; then
        echo "Installing yarn with npm..."
        npm install -g yarn

    elif [[ "$answer" == "n" ]]; then
        echo "Exiting Script (please install yarn before running again or choose to install with npm next run)"
        exit 0
    else
        echo "Invalid input. Please enter 'y' or 'n'."
        exit 1
    fi
else
    echo "Yarn installed!"
fi

echo "Installing project dependencies..."
yarn install

cd functions
echo "Installing Firebase Function dependencies..."
yarn install

cd .. 
#echo $PWD
echo "Starting React project..."
yarn start


